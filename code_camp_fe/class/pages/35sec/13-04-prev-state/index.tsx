import { useState } from "react";

export default function counterLetDocumentPage() {
  const [count, setCount] = useState(0);
  //let은 리액트 html에선 사용할 수 없음

  function onClickCountUp() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    //prev = 임시 저장공간
    setCount((prev) => prev + 1); //prev = useState(0) ==> 1
    setCount((prev) => prev + 1); //prev = 1 ==> 2
    setCount((prev) => prev + 1); //prev = 2 ==> 3
    setCount((prev) => prev + 1); //prev = 3 ==> 4
    setCount((prev) => prev + 1); //prev = 4 ==> 5
  }

  function onClickCountDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      {/* <button onClick={onClickCountDown}>카운트 내리기</button> */}
    </div>
  );
}
