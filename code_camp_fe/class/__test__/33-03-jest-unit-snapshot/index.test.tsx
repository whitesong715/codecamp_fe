import JestUnitTest from "../../pages/55sec/33-03-jest-unit-snapshot"
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"

// 기존과 바뀐점을 찾고, 없으면 snapshot을 남긴다(사진을 찍는다)
it("기존 사진과 바뀐것이 없는지 비교 - 스냅샷 테스트", () => {
    const result = render(<JestUnitTest />)

    expect(result.container).toMatchSnapshot()
})