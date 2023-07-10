import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./detailPresent";
import { FETCH_BOARD } from "./detailQueries";

export default function boardDetailContainer() {
  const router = useRouter();

  console.log("router1:", router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  console.log("router2:", router.query.boardId);
  console.log("data:", data);

  return <BoardDetailUI data={data} />;
}
