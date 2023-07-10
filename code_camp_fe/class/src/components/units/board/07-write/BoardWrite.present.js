import { RedInput, BlueButton } from "./BoardWrite.style";

export default function BoardWriteUI(props) {
  return (
    <div>
      작성자: <RedInput type="text" onChange={props.onChangeWriter} />
      제목: <input type="text" onChange={props.onChangeTitle} />
      내용: <input type="text" onChange={props.onChangeContents} />
      <BlueButton onClick={props.onClickSubmit} isActive={props.isActive}>
        Graphql - api 요청
      </BlueButton>
      ;
    </div>
  );
}
