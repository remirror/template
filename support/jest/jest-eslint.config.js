const { baseDir } = require('../scripts/helpers');

process.env.FULL_ESLINT_CHECK = 'true';

const config = {
  rootDir: baseDir(),
  runner: 'jest-runner-eslint',
  displayName: 'lint',
  testMatch: [`<rootDir>/**/*.{ts,js,tsx}`],
  watchPlugins: ['jest-runner-eslint/watch-fix'],
};

module.exports = config;
