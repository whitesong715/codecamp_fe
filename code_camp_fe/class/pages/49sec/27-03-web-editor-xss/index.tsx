import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
// import { Modal } from "antd";

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

// 프리렌더링 후 브라우저단에서 임포트 = 다이나믹 임포트
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function webEditor(): JSX.Element {
  const router = useRouter();
  const [MyFunction] = useMutation(내그랲큐셑);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // ReactQuill 만든 사람들이 만든 onChange 함수 => Event X
  const onChangeContents = (value: string): void => {
    console.log(value === "<p><br></p>" ? "" : value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐으니까 에러검증 같은것들 해달라고 React-hook-form에 알려주는 기능
    void trigger("contents");
  };

  const onClickSubmit = async (data: any): Promise<void> => {
    console.log("submit클릭");
    const result = await MyFunction({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
        },
      },
    });

    console.log("gql성공");
    const { Modal } = await import("antd"); //code-splitting(코드 스플릿팅)
    Modal.success({ content: "게시글 등록 성공" });

    const boardId = result.data.createBoard._id;

    void router.push(`/49sec/27-03-web-editor-xss-detail/${boardId}`);
  };

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
