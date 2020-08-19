<div align="center">
  <br />
  <div align="center">
    <img width="300" height="300" src="../support/assets/logo.svg" alt="svg logo" />
  </div>
  <br />
  <br />
  <br />
  <div align="center">
    <a href="https://github.com/remirror/template/actions?query=workflow:ci"><img src="https://github.com/remirror/template/workflows/ci/badge.svg?branch=next" alt="Continuous integration badge for github actions" /></a>
  </div>
</div>

> Add your motivational tagline here.

<br />

## Setup

To setup this repo for your use:

- Find and replace `remirror/template` with `user/repo` across the whole project.
- Add your first package in the packages folder.

To enable automated publishing add your npm token to to your repo secrets with the name `NPM_TOKEN`.

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
