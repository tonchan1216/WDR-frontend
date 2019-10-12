module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '^@app/(.+)': '<rootDir>/src/js/$1',
    '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/js/setupTests.js']
};
