import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalCounter(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // ComponentDidMount와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []);

  // componentDidMount + componentDidUpdate와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행");
  });

  useEffect(() => {
    // componentWillUnmount와 동일
    return () => {
      console.log("사라지기 전에 실행");
    };
  }, []);

  // 1. useEffect 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행");

    return () => {
      console.log("사라지기 전에 실행");
    };
  });

  // 2. useEffect의 잘못된 사용법 => 추가 렌더링1회 발생
  // useEffect(() => {
  //   setWriter();
  // }, [count]);

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>업</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
