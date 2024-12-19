module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // TypeScript 파일을 ts-jest로 변환
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1', // src 경로 매핑 추가
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // TypeScript 설정 파일 경로
      diagnostics: false, // 진단 메시지 비활성화 (선택 사항)
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
