import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 내그랲큐셑 } from "./boardWrite.queries";
import BoardWriteUI from "./BoardWrite.present";

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

  return (
    <BoardWriteUI
      aaa={onClickSubmit}
      bbb={onChangeWriter}
      ccc={onChangeTitle}
      ddd={onChangeContents}
    />
    //props= {aaa={onClickSubmit}, bbb={onChangeWriter}, ccc={onChangeTitle}, ddd={onChangeContents}}
  );
}
