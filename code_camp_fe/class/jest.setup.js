import {server} from './src/commons/mocks'
beforeAll(() => server.listen()) //가짜 서버 켜기
afterAll(() => server.close())