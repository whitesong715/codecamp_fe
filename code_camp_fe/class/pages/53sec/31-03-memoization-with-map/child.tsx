import { memo } from "react";

interface IMapChild {
  el: string;
}

function MapChild(props: IMapChild): JSX.Element {
  console.log("자식이 렌더링", props.el);
  return <span>{props.el}</span>;
}

export default memo(MapChild);
