module.exports = {
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '^@app/(.+)': '<rootDir>/src/js/$1' // 絶対パス
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
