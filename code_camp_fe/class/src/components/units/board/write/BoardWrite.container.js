import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.present";

const 내그랲큐셑 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function BoardWrite() {
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  const [MyFunction] = useMutation(내그랲큐셑);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {
        //variables == $
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

  return <BoardWriteUI />;
}
