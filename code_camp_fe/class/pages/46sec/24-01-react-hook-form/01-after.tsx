import { useForm } from "react-hook-form";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>();

  const onClickSubmit = async (data: IFormData): void => {
    console.log(data);
  };

  //한줄 일 시 () X
  return (
    <form onSubmit={wrapAsync(handleSubmit(onClickSubmit))}>
      {" "}
      {/* wrapAsync사용 시 다른 URL로 이동 주의, ctrl + 함수 클릭해서 해결코드 확인하기 */}
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      내용: <input type="text" {...register("contents")} />
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      <button>Graphql - api 요청</button>;
    </form>
  );
}

/*
 <button type="reset">모든 인풋 지우기</button>
 <button type="button">버튼 역할만 수행</button>
 <button type="submit">등록</button> //기본값
*/
