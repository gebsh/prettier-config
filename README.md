# @gebsh/prettier-config

[![Version](https://img.shields.io/npm/v/gebsh/prettier-config?style=flat-square)](https://www.npmjs.com/package/@gebsh/prettier-config?activeTab=versions)
[![License](https://img.shields.io/github/license/gebsh/prettier-config?style=flat-square)][license]

gebsh's shareable [Prettier] configuration.

## Quick start

### Installation

Install Prettier and this configuration using the following command:

```console
$ npm install --save-dev prettier @gebsh/prettier-config
```

### Usage

To use the configuration you can either:

- Add a reference to it in the `package.json`:

  ```json
  {
    "name": "my-package",
    "version": "1.0.0",
    "prettier": "@gebsh/prettier-config"
  }
  ```

- Or create a
  [configuration file](https://prettier.io/docs/en/configuration.html)
  containing the name of this configuration. For example, if you use a
  `.prettierrc.json` file, then it should look like this:

  ```json
  "@gebsh/prettier-config"
  ```

For more details about using shareable configurations, see
[the official Prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations).

## License

Licensed under [ISC][license].

[prettier]: https://prettier.io/
[license]: LICENSE
