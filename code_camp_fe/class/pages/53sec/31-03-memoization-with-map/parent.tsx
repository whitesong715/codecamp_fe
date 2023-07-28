import { useState } from "react";
import MapChild from "./child";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationWithMapParent(): JSX.Element {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다");

  const onCliCkChange = (): void => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다");
  };

  return (
    <>
      {/* {data.split("").map((el, index) => (
        <MapChild key={index} el={el} />
      ))} */}
      {data.split("").map((el, index) => (
        <MapChild key={uuidv4()} el={el} />
      ))}
      <button onClick={onCliCkChange}>체인지</button>
    </>
  );
}
