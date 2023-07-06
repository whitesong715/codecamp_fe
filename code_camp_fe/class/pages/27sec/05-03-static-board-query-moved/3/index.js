import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 10) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticMovedPage() {
  const { data } = useQuery(FETCH_BOARD);

  console.log(data);

  return (
    <div>
      <div>3페이지 이동 완료</div>
      <div>작성자: {data && data?.fetchBoard.writer}</div>{" "}
      {/* data && data = data? --> 옵셔널체이닝*/}
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
    </div>
  );
}
