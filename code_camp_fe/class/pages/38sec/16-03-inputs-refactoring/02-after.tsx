import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

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
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [MyFunction] = useMutation(내그랲큐셑);

  const onChangeInputs = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: { ...inputs },
    });
    console.log(result);
  };

  //한줄 일 시 () X
  return (
    <div>
      작성자: <input id="writer" type="text" onChange={onChangeInputs} />
      제목: <input id="title" type="text" onChange={onChangeInputs} />
      내용: <input id="contents" type="text" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>Graphql - api 요청</button>;
    </div>
  );
}
