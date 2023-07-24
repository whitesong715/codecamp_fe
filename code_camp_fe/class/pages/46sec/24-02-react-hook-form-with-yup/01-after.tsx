import { useForm } from "react-hook-form";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./01-after.validation";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  // boardAddress: {
  //   addressDetail: string;
  // };
}

export default function GraphqlMutationPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = async (data: IFormData): void => {
    console.log(data);
  };

  //한줄 일 시 () X
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용: <input type="text" {...register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        Graphql - api 요청
      </button>
    </form>
  );
}
