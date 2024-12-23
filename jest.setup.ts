import '@testing-library/jest-dom' // React Testing Library에서 사용하는 설정
import { server } from './src/__tests__/mocks'

beforeAll(() => server.listen())
afterAll(() => server.close())
