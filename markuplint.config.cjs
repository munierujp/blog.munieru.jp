// @ts-check

/** @typedef {import('@markuplint/ml-config').Config} Config */

/**
 * @type {Config}
 * @see https://markuplint.dev/docs/configuration
 */
const config = {
  extends: 'markuplint:recommended',
  excludeFiles: [
    './node_modules/**/*'
  ]
}

module.exports = config
