import { add } from "../../pages/55sec/33-01-jest"

it("더하기 잘되는지 테스트", () => {
    const result = add(3,5)
    expect(result).toBe(8)
})

// describe("테스트 그룹 만들기", () => {
//     it("더하기 잘되는지 테스트", () => {
//     })
//     it("더하기 잘되는지 테스트", () => {
//     })
//     it("더하기 잘되는지 테스트", () => {
//     })
// })