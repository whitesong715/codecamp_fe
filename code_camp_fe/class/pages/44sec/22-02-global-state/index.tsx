import { useEffect } from "react";
import BoardWrite from "../../../src/components/units/22-global-state/BoardWrite.container";
import { useRecoilState } from "recoil";

export default function GlobalState(): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(true);

  useEffect(() => {
    setIsEdit(false);
  }, []);
  return <BoardWrite />;
}
