import { Modal } from "antd";

export default function ModalAlert(): JSX.Element {
  const onClickSuccess = (): void => {
    Modal.success({
      content: "게시글 등록 성공",
    });
  };

  const onClickError = (): void => {
    Modal.error({
      title: "게시글 등록 실패",
      content: "비밀번호가 틀렸습니다",
    });
  };

  return (
    <>
      <button onClick={onClickSuccess}>성공</button>
      <button onClick={onClickError}>실패</button>
    </>
  );
}
