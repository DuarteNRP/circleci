module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.js", "<rootDir>/config/**/*.js"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  globals: {
    __DEV__: true,
  },
  modulePaths: ["<rootDir>"],
  restoreMocks: true,
  rootDir: "../",
  setupFilesAfterEnv: ["jest-extended", "<rootDir>/test/unit/setup.js"],
  testEnvironment: "node",
  testRegex: "test/unit/.*\\.test.js$",
  verbose: true,
};
