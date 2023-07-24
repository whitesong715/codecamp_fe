import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../stores";

interface IUseMoveToPage {
  visitedPage: string;
  onClickMoveToPage: (path: string) => () => void;
}

export const useMoveToPage = (): IUseMoveToPage => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path); // 비로그인 시에는 set하지 않도록 조건 추가
    //localStorage.setItem("visitedPage", path); // localStorage도 가능
    void router.push(path);
  };

  return {
    visitedPage,
    onClickMoveToPage,
  };
};
