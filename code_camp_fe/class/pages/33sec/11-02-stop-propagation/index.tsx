import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
import Checkbox from "./checkbox";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
    }
  }
`;

export default function StaticMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const onClickTitle = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.id);
  };

  const qqq1 = () => {
    alert("1번클릭");
  };

  const qqq2 = () => {
    alert("2번클릭");
  };

  const qqq3 = () => {
    event?.stopPropagation(); //버블링 중단
    alert("3번클릭");
  };

  const qqq4 = () => {
    alert("4번클릭");
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div onClick={qqq1} id={el.writer}>
          <Checkbox /> {/* 다른 파일에서 import해도 버블링현상은 동일 */}
          <span style={{ margin: "10px" }} onClick={qqq4}>
            {el.number}
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
