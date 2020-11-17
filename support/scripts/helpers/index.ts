import { readPreState } from '@changesets/pre';
import readChangesets from '@changesets/read';
import { NewChangeset, PreState } from '@changesets/types';
import { getPackages } from '@manypkg/get-packages';
import { exec as _exec } from 'child_process';
import path from 'path';
import _rm from 'rimraf';
import { Logger } from 'tslog';
import { PackageJson } from 'type-fest';
import { promisify } from 'util';

/**
 * The logger used when running scripts.
 */
export const log: Logger = new Logger();

const exec = promisify(_exec);
const rm = promisify(_rm);
const separator = '__';

/**
 * Convert a mangled name to its unmangled version.
 *
 * `babel__types` => `@babel/types`.
 */
export function unmangleScopedPackage(mangledName: string): string {
  return mangledName.includes(separator) ? `@${mangledName.replace(separator, '/')}` : mangledName;
}

/**
 * Mangle a scoped package name. Which removes the `@` symbol and adds a `__`
 * separator.
 *
 * `@babel/types` => `babel__type`
 */
export function mangleScopedPackageName(packageName: string): string {
  const [scope, name] = packageName.split('/');

  if (name) {
    return [scope.replace('@', ''), name].join(separator);
  }

  return scope;
}

/**
 * Get a path relative to the base directory of this project. If called with no
 * arguments it will return the base directory.
 */
export function baseDir(...paths: string[]): string {
  return path.resolve(__dirname, '../../..', path.join(...paths));
}

/**
 * Get the path relative to the base directory of this project.
 */
export function getRelativePathFromJson({ location }: { location: string }): string {
  return path.relative(baseDir(), location);
}

/**
 * Format the provided files with `prettier`.
 */
export async function formatFiles(path = '', silent = false): Promise<void> {
  const { stderr, stdout } = await exec(`prettier --loglevel warn ${path} --write`);

  if (silent) {
    return;
  }

  if (stderr) {
    console.error(stderr.trim());
  }

  if (stdout) {
    console.log(stdout.trim());
  }
}

export interface Package extends PackageJson {
  /**
   * The package name.
   */
  name: string;

  /**
   * The absolute path to the package.
   */
  location: string;

  /**
   * Custom meta properties consumed by `remirror`.
   */
  meta?: {
    sizeLimit?: string;
  };
}

/**
 * The cached packages, to prevent multiple re-computations.
 */
let packages: Promise<Package[]>;

/**
 * Get all dependencies.
 *
 * @param excludeDeprecated - when true exclude the deprecated packages
 */
export function getAllDependencies(excludeDeprecated = true): Promise<Package[]> {
  if (!packages) {
    packages = getPackages(baseDir()).then(({ packages }) => {
      if (!packages) {
        return [];
      }

      return packages
        .filter((pkg) => (excludeDeprecated ? !pkg.dir.includes('deprecated') : true))
        .map((pkg) => ({
          ...pkg.packageJson,
          location: pkg.dir,
        }));
    });
  }

  return packages;
}

/**
 * Get all the packages that can be used as dependencies within the project.
 * These are identified by having a types field in the package.json.
 *
 * @param relative - when set to true this will return the paths as
 * relative to the root directory. Defaults to `false`.
 */
export async function getTypedPackagesWithPath(relative = false): Promise<Record<string, string>> {
  // Load all the packages within this repository.
  const packages = await getAllDependencies();

  // Get the packages which have a `types` field.
  const tsPackages = packages.filter((pkg) => pkg.types);

  /**
   * The typed packages to be returned.
   */
  const typedPackages: Record<string, string> = {};

  // Loop through the typed packages and store the name as a key and path
  // (either relative or absolute) as the value.
  for (const pkg of tsPackages) {
    typedPackages[pkg.name] = relative ? getRelativePathFromJson(pkg) : pkg.location;
  }

  return typedPackages;
}

interface ChangesetState {
  preState: PreState | undefined;
  changesets: NewChangeset[];
}

/**
 * @returns { Promise<ChangesetState> }
 */
export async function readChangesetState(cwd = process.cwd()): Promise<ChangesetState> {
  const preState = await readPreState(cwd);
  let changesets = await readChangesets(cwd);

  if (preState !== undefined && preState.mode === 'pre') {
    const changesetsToFilter = new Set(preState.changesets);
    changesets = changesets.filter((x) => !changesetsToFilter.has(x.id));
  }

  return {
    preState,
    changesets,
  };
}

export { exec, rm };
