import { useState } from "react";

export default function counterLetDocumentPage() {
  const [count, setCount] = useState(0);
  //let은 리액트 html에선 사용할 수 없음

  function onClickCountUp() {
    setCount(count + 1);
  }

  function onClickCountDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 내리기</button>
    </div>
  );
}
