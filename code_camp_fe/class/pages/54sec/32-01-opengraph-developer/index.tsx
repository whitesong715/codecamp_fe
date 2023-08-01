// 개발자일때 => 디스코드, 카톡
import axios from "axios";
import { wrapAsync } from "../../53sec/31-10-data-prefetch";

export default function OpengraphDeveloper(): JSX.Element {
  const onClickEnter = async (): Promise<void> => {
    // 1. 채팅데이터에 주소가 있는지 찾기 ex) https~~~로 시작하는것

    // 2. 해당 주소로 스크래핑하기
    const result = await axios.get(
      "http://localhost:3000/54sec/32-01-opengraph-provider",
    ); //CORS
    console.log(result.data);

    // 3. 메타 태그에서 오픈그래프(:og)찾기
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og:")),
    );
  };

  return (
    <>
      <button onClick={wrapAsync(onClickEnter)}>채팅 입력 후 엔터치기</button>
    </>
  );
}
