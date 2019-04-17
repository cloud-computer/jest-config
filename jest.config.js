module.exports = {
  transform: { '\.tsx?$': 'ts-jest', },
  testRegex: '/__tests__/.*\\.test\\.ts$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverage: false,
  coverageDirectory: '.coverage',
  coverageReporters: ['text', 'text-summary'],
  coverageThreshold: {
    global: { statements: 90, lines: 90, functions: 90 }
  },
  testPathIgnorePatterns: [
    '/build/',
    '/node_modules/',
  ],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-suspend',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  setupFilesAfterEnv: [
    'jest-expect-message',
    `${__dirname}/setup.js`,
  ]
}
