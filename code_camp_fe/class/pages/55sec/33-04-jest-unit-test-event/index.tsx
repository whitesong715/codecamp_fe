import { useState } from "react"

export default function JestUnitTest() {

    const [count, setCount] = useState(0)

    const onClickCountUp = () => {
        setCount((prev) => prev + 1)
    }

    return (
        <>
            <div role="count">{count}</div>
            <button role="count-button" onClick={onClickCountUp}>놀러가기</button>
        </>
    )
}