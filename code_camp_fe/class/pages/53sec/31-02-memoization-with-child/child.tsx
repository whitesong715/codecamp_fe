import { memo } from "react";

function MemoizationWithChild(): JSX.Element {
  console.log("자식이 렌더링됩니다");

  return <h1>저는 자식 컴포넌트입니다</h1>;
}

export default memo(MemoizationWithChild);
