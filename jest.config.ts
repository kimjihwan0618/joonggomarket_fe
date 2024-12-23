const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './', // 공백 제거
})

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['./jest.setup.ts'], // 파일 존재 여부 확인
}

module.exports = createJestConfig(customJestConfig)
