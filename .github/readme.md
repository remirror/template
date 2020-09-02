<p align="center">
  <a href="#">
    <img width="300" height="300" src="../support/assets/logo.svg" alt="svg logo from undraw.co" title="SVG Logo from undraw.co" />
  </a>
</p>

<p align="center">
  Add your <em>motivational</em> tagline here.
</p>

<br />

<p align="center">
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#why"><strong>Why?</strong></a> ·
  <a href="#plans"><strong>Plans</strong></a> ·
  <a href="./docs"><strong>Documentation</strong></a> ·
  <a href="./docs/contributing.md"><strong>Contributing</strong></a>
</p>

<br />

<p align="center">
  <a href="https://github.com/remirror/template/actions?query=workflow:ci">
    <img src="https://github.com/remirror/template/workflows/ci/badge.svg?branch=next" alt="Continuous integration badge for github actions" title="CI Badge" />
  </a>
</p>

<br />

## Getting Started

Use the following steps when first using this template.

- Find and replace `remirror/template` with `user/repo` across the whole project.
- Replace `<< TEMPLATE NAME >>` in the `LICENSE` file with the name of your choosing.
- Replace the template package in the packages folder with a package of your choosing.
- **_OPTIONAL_**: For automatic publishing add your npm token to to your [github repo secrets](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) with the name `NPM_TOKEN`.

<br />

## Why

I've created this template primarily for my work with remirror, to prevent from constantly reinventing the wheel when starting a new project. I've often had ideas and then delayed because the pain of starting from scratch is too high. This toolkit hopefully helps to reduce the friction.

This template repo comes with the following tools:

- `pnpm` monorepo.
- `preconstruct` - Automated builds and great support for JS tooling.
- `TypeScript`
- `eslint`
- `prettier`
- `babel` configuration.
- `vscode` integration with recommended plugins.
- `codespaces` with a dev container which is ready to use. You can launch this codebase without any need for.
- `changesets` for automating releases.
- `GitHub Actions` as the primary CI tool.
- `husky` for git hooks.
- `lint-staged` for automated precommit checks.
- Minimal files at the top level via symlinks to a directory in `support/root`.

## Plans

These aren't currently supported but I might add them in the future.

- [ ] Docusaurus website

<br />

## Contributing

Please read our [contribution guide] for details on our code of conduct, and the process for submitting pull requests. It also outlines the project structure so you can find help when navigating your way around the codebase.

In addition each folder in this codebase a readme describing why it exists.

You might also notice there are surprisingly few files in the root directory of this project. All the configuration files have been moved to the `support/root` directory and are symlinked to the root directory in a `preinstall` hook. For more information take a look at [folder](support/root) and [readme](support/root/readme.md).

<br />

## Versioning

This project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/remirror/template/tags).

<br />

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[contribution guide]: docs/contributing
[typescript]: https://github.com/microsoft/Typescript
