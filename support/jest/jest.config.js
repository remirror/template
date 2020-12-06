const { jestSupportDir, baseDir } = require('./helpers');

const { TEST_BUILD } = process.env;

/** @type Partial<import("@jest/types").Config.InitialOptions> */
module.exports = {
  clearMocks: true,
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  globals: {
    __DEV__: true,
    __TEST__: true,
    __E2E__: false,
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'esbuild-jest',
  },
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
  testRegex: '/__tests__/.*\\.spec\\.tsx?$',
  setupFilesAfterEnv: [jestSupportDir('jest.framework.ts')],
  cacheDirectory: baseDir('.jest', TEST_BUILD ? 'build' : 'aliased'),
  errorOnDeprecated: true,
};
