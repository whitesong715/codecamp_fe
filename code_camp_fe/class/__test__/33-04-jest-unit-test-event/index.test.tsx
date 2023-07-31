import JestUnitTest from "../../pages/55sec/33-04-jest-unit-test-event"
import { fireEvent, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"

it("버튼을 눌렀을때 제대로 작동하는지 테스트", () => {
    render(<JestUnitTest />)

    fireEvent.click(screen.getByRole("count-button"))

    expect(screen.getByRole("count")).toHaveTextContent("1")
})