import { MyEmail, MyEmailInput } from "../../../styles/01-02-emotion";

export default function emotionPage() {
  return (
    <div>
      <MyEmail>이메일: </MyEmail>
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <button>click</button>
      <img src="/next.svg" />
    </div>
  );
}
