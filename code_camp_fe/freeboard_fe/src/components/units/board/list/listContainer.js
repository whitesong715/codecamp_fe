import { useQuery } from "@apollo/client";
import BoardListUI from "./listPresent";
import { FETCH_BOARDS } from "./listQueries";
import { useRouter } from "next/router";

export default function listContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickNew = () => {
    router.push("/boards/new");
  };

  const onClickDetail = () => {
    router.push(`/boards/${event.target.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickNew={onClickNew}
      onClickDetail={onClickDetail}
    ></BoardListUI>
  );
}
