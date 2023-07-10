import { RedInput, BlueButton } from "./BoardWrite.style";

export default function BoardWriteUI(props) {
  return (
    <div>
      작성자: <RedInput type="text" onChange={props.bbb} />
      제목: <input type="text" onChange={props.ccc} />
      내용: <input type="text" onChange={props.ddd} />
      <BlueButton onClick={props.aaa}>Graphql - api 요청</BlueButton>;
    </div>
  );
}
