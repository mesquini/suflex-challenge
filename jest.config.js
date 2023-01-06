/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/main.ts',
    '!src/common/**',
    '!src/**/*.database.dao.ts',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/dist',
    '<rootDir>/tests',
  ],
  moduleNameMapper: {
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@common/(.*)$': '<rootDir>/src/common/$1',
  },
  setupFilesAfterEnv: [],
  setupFiles: ['dotenv/config'],
  coverageDirectory: 'tests/coverage',
  testEnvironment: 'node',
};
