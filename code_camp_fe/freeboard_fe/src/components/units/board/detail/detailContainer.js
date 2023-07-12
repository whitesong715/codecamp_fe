import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./detailPresent";
import { FETCH_BOARD, DELETE_BOARD } from "./detailQueries";

export default function boardDetailContainer() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log("router1:", router);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const onClickDelete = () => {
    deleteBoard({
      variables: { boardId: router.query.boardId },
    });
    alert("삭제완료");
    router.push("/boards");
  };

  const onClickList = () => {
    router.push("/boards");
  };

  const onClickEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  console.log("router2:", router.query.boardId);
  console.log("data:", data);

  return (
    <BoardDetailUI
      data={data}
      onClickList={onClickList}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
    />
  );
}
