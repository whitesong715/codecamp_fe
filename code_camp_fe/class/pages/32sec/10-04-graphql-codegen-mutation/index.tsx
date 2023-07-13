import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

const 내그랲큐셑 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  //const [counter, setCounter] = useState<number>(0);

  //const [MyFunction] = useMutation<결과타입, 변수타입>(내그랲큐셑);
  const [MyFunction] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(내그랲큐셑);

  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {
        //variables == $
        writer: "훈이",
        title: "안녕하세요",
        contents: "반갑습니다",
      },
    });
    console.log(result);
  };

  //한줄 일 시 () X
  return <button onClick={onClickSubmit}>Graphql - api 요청</button>;
}
