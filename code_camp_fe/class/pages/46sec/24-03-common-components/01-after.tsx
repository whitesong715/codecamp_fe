import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./01-after.validation";
import Input01 from "../../../src/components/commons/inputs/01/index";
import Button01 from "../../../src/components/commons/buttons/01";

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
      작성자: <Input01 register={register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      제목: <Input01 register={register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용: <Input01 register={register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <Button01 title="등록하기" isActive={formState.isValid} />
    </form>
  );
}
