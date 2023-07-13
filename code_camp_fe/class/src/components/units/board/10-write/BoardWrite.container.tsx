import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { 내그랲큐셑, UPDATE_BOARD } from "./boardWrite.queries";
import BoardWriteUI from "./BoardWrite.present";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyvariables } from "./BoardWriteTypes";

export default function BoardWrite(props: IBoardWriteProps) {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [MyFunction] = useMutation(내그랲큐셑);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const router = useRouter();

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
    router.push(
      `/32sec/10-02-typescript-boards/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {
    const myVariables: IMyvariables = { number: Number(router.query.number) };
    if (title) {
      myVariables.title = title;
    }
    if (contents) {
      myVariables.contents = contents;
    }
    if (writer) {
      myVariables.writer = writer;
    }

    //여기서 수정하자
    const result = await updateBoard({
      variables: myVariables,
    });
    router.push(
      `/32sec/10-02-typescript-boards/${result.data.updateBoard.number}`
    );
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onClickUpdate={onClickUpdate}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      data={props.data} //undefind(new) or data(edit)
      onClickSubmit={onClickSubmit}
    />
    //props= {aaa={onClickSubmit}, bbb={onChangeWriter}, ccc={onChangeTitle}, ddd={onChangeContents}}
  );
}
