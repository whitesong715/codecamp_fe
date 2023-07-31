import {  gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

const 내그랲큐셑 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticMovedPage(): JSX.Element {

  const [MyFunction] = useMutation(내그랲큐셑);
  const router = useRouter()
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event:ChangeEvent<HTMLInputElement>):void => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event:ChangeEvent<HTMLInputElement>):void => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event:ChangeEvent<HTMLInputElement>):void => {
    setContents(event.target.value);
  };

  const onClickSubmit = async (): Promise<void> => {
    const result = await MyFunction({
      variables: {
        createBoardInput: {
          writer,
          title,
          contents,
          password: "1234"
        }
      },
    });
    console.log(result);
    const boardId = result.data.createBoard._id
    void router.push(`/boards/${boardId}`)
  };

  return (
    <div>
      작성자: <input role="input-writer" type="text" onChange={onChangeWriter} />
      제목: <input role="input-title" type="text" onChange={onChangeTitle} />
      내용: <input role="input-contents" type="text" onChange={onChangeContents} />
      <button role="submit-button" onClick={onClickSubmit}>Graphql - api 요청</button>;
    </div>
  );
}
