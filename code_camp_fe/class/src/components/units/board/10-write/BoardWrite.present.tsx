import { RedInput, BlueButton } from "./BoardWrite.style";
import { IPresentProps } from "./BoardWriteTypes";

export default function BoardWriteUI(props: IPresentProps) {
  return (
    <div>
      작성자:{" "}
      <RedInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      제목:{" "}
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      내용:{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <BlueButton
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}
      </BlueButton>
    </div>
  );
}
