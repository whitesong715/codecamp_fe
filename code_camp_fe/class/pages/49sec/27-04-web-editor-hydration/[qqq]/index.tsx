import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";
import { green } from "@material-ui/core/colors";

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

export default function StaticMovedPage(): JSX.Element {
  const router = useRouter();
  console.log("router:", router);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.qqq },
  });

  console.log(data);

  return (
    <div>
      <div style={{ color: "red" }}>작성자: {data?.fetchBoard?.writer}</div>
      <div style={{ color: "green" }}>제목: {data?.fetchBoard?.title}</div>
      {typeof window !== "undefined" ? (
        <div
          style={{ color: "blue" }}
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard?.contents),
          }}
        />
      ) : (
        <div style={{ color: "blue" }} />
      )}
      <div style={{ color: "brown" }}>주소: 구로구</div>
    </div>
  );
}
