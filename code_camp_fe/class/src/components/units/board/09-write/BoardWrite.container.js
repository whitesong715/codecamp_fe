import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 내그랲큐셑, UPDATE_BOARD } from "./boardWrite.queries";
import BoardWriteUI from "./BoardWrite.present";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [MyFunction] = useMutation(내그랲큐셑);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

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
    router.push(`/31sec/09-03-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    //여기서 수정하자
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer,
        title,
        contents,
      },
    });
    router.push(`/31sec/09-03-boards/${result.data.updateBoard.number}`);
  };

  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onChangeWriter={onChangeWriter}
      onClickUpdate={onClickUpdate}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
    />
    //props= {aaa={onClickSubmit}, bbb={onChangeWriter}, ccc={onChangeTitle}, ddd={onChangeContents}}
  );
}
