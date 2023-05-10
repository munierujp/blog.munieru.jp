// @ts-check

/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 */
const config = {
  extends: '@munierujp',
  env: {
    browser: true,
    jquery: true
  },
  plugins: [
    'html'
  ],
  globals: {
    ScrollHint: 'readonly'
  }
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = config
