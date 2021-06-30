module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  bail: 1,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress',
    '<rootDir>/node_modules/',
  ],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
    },
  },
}
