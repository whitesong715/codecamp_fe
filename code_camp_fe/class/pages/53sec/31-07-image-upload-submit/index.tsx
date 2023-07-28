import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent } from "react";
import {
  wrapAsync,
  wrapAsyncT,
} from "../../../src/commons/libraries/asyncFunc";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const 내그랲큐셑 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUPload(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>();

  const [MyFunction] = useMutation(내그랲큐셑);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async (): Promise<void> => {
    // 1. uploadFile
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;

    // 2. createBoard
    const result = await MyFunction({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목",
          contents: "내용",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    console.log("???");
    const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type+"file" multiple /> 일 때, 여러개 드래그 가능
    if (file === undefined) return;
    console.log(file);
    console.log("파일까지 나옴");

    // const result = await uploadFile({ variables: { file } });
    // console.log(result.data?.uploadFile.url);
    // setImageUrl(result.data?.uploadFile.url ?? "");

    // 1. 임시 url생성 => 가짜URL - 내 브라우저에서만 접근 가능
    // const result = URL.createObjectURL(file);
    // console.log(result);

    // 2. 임시 url생성 => 진짜URL - 다른 브라우저에서도 접근 가능
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log(event.target?.result); // 게시판 event.target.id를 쓰면 eslint가 잡았던 이유: event.target은 태그만을 가르키지 않음
      if (typeof event.target?.result === "string") {
        setImageUrl(event.target?.result);
        setFile(file);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={wrapAsyncT(onChangeFile)} />
      <img src={imageUrl} />
      <button onClick={wrapAsyncT(onClickSubmit)}>게시글 등록하기</button>
    </>
  );
}
