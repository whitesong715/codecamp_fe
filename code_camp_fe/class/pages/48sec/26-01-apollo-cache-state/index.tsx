import { useQuery, gql, useMutation } from "@apollo/client";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { string } from "yup";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: Int) {
    deleteBoard(boardId: $boardId) #자동으로 ID
  }
`;

const 내그랲큐셑 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticMovedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [MyFunction] = useMutation(내그랲큐셑);

  interface IPrev {
    __ref: string;
  }

  const onClickDelete = (boardId: string) => (): void => {
    void deleteBoard({
      variables: { boardId },
      //   refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev: IPrev, { readField }) => {
              const deletedId = data.deleteBoard; //삭제완료된 아이디
              const filterdPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId,
              );
              return [...filterdPrev]; // 삭제된 ID를 제외한 나머지 9개만 리턴
            },
          },
        });
      },
    });
  };

  const onClickSubmit = (): void => {
    void MyFunction({
      variables: {
        createBoardInput: {
          password: "1234",
          writer: "철수",
          title: "제목",
          contents: "내용",
        },
      },
      // refetchQueries: [{ query: FETCH_BOARDS }],
      // 캐시스테이트 업뎃
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
    console.log(result);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickDelete(el._id)}>삭제하기</button>
    </div>
  );
}
