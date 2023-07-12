import { gql, useQuery } from "@apollo/client";
import BoardNewContainer from "../../../../src/components/units/board/new/newContainer";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function boardEdit(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  console.log("data:", { data });

  return <BoardNewContainer isEdit={true} data={data} />;
}
