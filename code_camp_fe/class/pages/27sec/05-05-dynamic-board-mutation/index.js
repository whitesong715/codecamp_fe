import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [MyFunction] = useMutation(내그랲큐셑);

  const onClickSubmit = async () => {
    try {
      //try에 있는 내용 시도 실패 시, 다음내용 모두 무시 후 catch 실행
      const result = await MyFunction({
        variables: {
          //variables == $
          writer: "훈이",
          title: "안녕하세요",
          contents: "반갑습니다",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);
      router.push(
        `/27sec/05-05-dynamic-routing-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };
  //한줄 일 시 () X
  return <button onClick={onClickSubmit}>Graphql - api 요청</button>;
}
