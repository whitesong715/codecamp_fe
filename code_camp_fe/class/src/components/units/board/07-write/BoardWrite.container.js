import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 내그랲큐셑 } from "./boardWrite.queries";
import BoardWriteUI from "./BoardWrite.present";

export default function BoardWrite(props) {
  const [isActive, setIsActive] = useState(false);
  const [writer, setWriter] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();
  const [MyFunction] = useMutation(내그랲큐셑);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      setIsActive(true);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value && contents && writer) {
      setIsActive(true);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value && title && writer) {
      setIsActive(true);
    }
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
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isActive={isActive}
    />
    //props= {aaa={onClickSubmit}, bbb={onChangeWriter}, ccc={onChangeTitle}, ddd={onChangeContents}}
  );
}
