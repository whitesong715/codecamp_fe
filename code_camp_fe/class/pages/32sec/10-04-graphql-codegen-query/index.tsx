import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticMovedPage() {
  const router = useRouter();
  console.log("router:", router);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { number: Number(router.query.qqq) },
    }
  );

  console.log(data);

  return (
    <div>
      <div>{router.query.qqq}페이지 이동 완료</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>{" "}
      {/* data && data = data? --> 옵셔널체이닝*/}
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </div>
  );
}
