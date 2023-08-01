import JestUnitTest from "../../pages/55sec/33-02-jest-unit-test"
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"

it("내가 원하는 대로 그려지는지 테스트", () => {
    render(<JestUnitTest />)

    const myText = screen.getByText("철수는 13살")
    expect(myText).toBeInTheDocument();

    const myText2 = screen.getByText("철수의 취미 입력하기:")
    expect(myText2).toBeInTheDocument();

    const myText3 = screen.getByText("놀러가기")
    expect(myText3).toBeInTheDocument();
})