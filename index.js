'use strict';

/** @type {import('prettier').Options} */
const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: false,
};

module.exports = config;
