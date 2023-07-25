import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc";
// import { Modal } from "antd";

// 프리렌더링 후 브라우저단에서 임포트 = 다이나믹 임포트
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function webEditor(): JSX.Element {
  // ReactQuill 만든 사람들이 만든 onChange 함수 => Event X
  const onChangeContents = (value: string): void => {
    console.log(value);
  };

  // useEffect(() => {
  //   async function aaa(): Promise<void> {
  //     const { Modal } = await import("antd"); //code-splitting(코드 스플릿팅)
  //     Modal.success({ content: "게시글 등록 성공" });
  //   }
  //   void aaa();
  // }, []);

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd"); //code-splitting(코드 스플릿팅)
    Modal.success({ content: "게시글 등록 성공" });
  };

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
