import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent } from "react";
import { wrapAsyncT } from "../../../src/commons/libraries/asyncFunc";
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
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [MyFunction] = useMutation(내그랲큐셑);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async (): Promise<void> => {
    // 1. uploadFile
    // 1-1) 안좋은 예제 - await를 매번 기다림 => for문 사용해도 마찬가지 => i값에 의존하기 때문에
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } });
    // const url0 = resultFile0.data?.uploadFile.url;
    // const url1 = resultFile1.data?.uploadFile.url;
    // const url2 = resultFile2.data?.uploadFile.url;
    // const resultUrls = [url0, url1, url2];

    // 1-2) 좋은예제 => promise.all
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);
    // console.log(results); // [resultFile0, resultFile1, resultFile2]
    // const resultUrls = results.map((el) => el.data?.uploadFile.url); //[url0, url1, url2]

    // 1-3) 좋은 예제 - Promise.all 리팩토링
    // const files = [File0, File1, File2];
    // files.map((el) => uploadFile({ variables: { file: el } }));

    console.log("여긴되니?");

    const results = await Promise.all(
      files.map(async (el) => await uploadFile({ variables: { file: el } })), //resultUrls 자체가 배열형태기 때문에 []생략
    );

    console.log("여긴되니2?");

    console.log(results); // [resultFile0, resultFile1, resultFile2]
    const resultUrls = results.map((el) => el.data?.uploadFile.url); //[url0, url1, url2]

    // 2. createBoard
    const result = await MyFunction({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목",
          contents: "내용",
          images: resultUrls, //resultUrls 자체가 배열형태기 때문에 []생략
        },
      },
    });
    console.log("result");
    console.log(result);
  };

  const onChangeFile =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
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
          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
      console.log("체인지파일");
    };

  return (
    <>
      <input type="file" onChange={wrapAsyncT(onChangeFile(0))} />
      <input type="file" onChange={wrapAsyncT(onChangeFile(1))} />
      <input type="file" onChange={wrapAsyncT(onChangeFile(2))} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={wrapAsyncT(onClickSubmit)}>게시글 등록하기</button>
    </>
  );
}
