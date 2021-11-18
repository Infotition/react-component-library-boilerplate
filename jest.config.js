module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  roots: ['src'],
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '@element/(.*)/(.*)$': '<rootDir>/app/components/elements/$1/$2',
    '@layout/(.*)/(.*)$': '<rootDir>/app/components/layouts/$1/$2',
    '@module/(.*)/(.*)$': '<rootDir>/app/components/modules/$1/$2',
    '@template/(.*)/(.*)$': '<rootDir>/app/components/templates/$1/$2',
    '@constant/(.*)/(.*)$': '<rootDir>/app/constants/$1/$2',
    '@hook/(.*)/(.*)$': '<rootDir>/app/hooks/$1/$2',
    '@util/(.*)/(.*)$': '<rootDir>/app/utils/$1/$2',
  },
};
