import { useState } from "react";

export default function counterLetDocumentPage(): JSX.Element {
  const [count, setCount] = useState(0);
  //let은 리액트 html에선 사용할 수 없음

  function onClickCountUp(): void {
    //1. 화살표 함수
    // setCount((prev) => prev + 1);

    // setCount((prev) => {
    //   return prev + 1;
    // });

    //2. 함수선언식
    // setCount(function (prev) {
    //   //로직 추가 가능 ex) if,for 등

    //   return prev + 1;
    // });

    //3. 매개변수 바꾸기
    setCount((asdf) => asdf + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </div>
  );
}
