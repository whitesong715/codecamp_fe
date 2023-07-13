import { MouseEvent } from "react";

export default function Checkbox() {
  const qqq2 = () => {
    alert("2번클릭");
  };

  const qqq3 = (event: MouseEvent<HTMLDivElement>) => {
    event?.stopPropagation(); //버블링 중단
    alert("3번클릭");
  };

  return (
    <span onClick={qqq2}>
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}
