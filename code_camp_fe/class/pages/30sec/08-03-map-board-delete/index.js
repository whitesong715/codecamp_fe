import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function StaticMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(data?.fetchBoards);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        // 특별한 이유가 없으면? Fragments로 감싸자(약간의 속도 향상 효과)
        // 1. 프레그먼트란? <></>, <Fragment></Fragment>
        // 2. 프레그먼트에 key입력? <Fragment key={1}></Fragment>
        <div key={el.number}>
          {/*index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존인덱스값과 동일값을 가진다*/}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
