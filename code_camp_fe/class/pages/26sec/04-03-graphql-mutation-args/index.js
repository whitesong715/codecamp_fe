import { useMutation, gql } from "@apollo/client";

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
  const [MyFunction] = useMutation(내그랲큐셑);

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
