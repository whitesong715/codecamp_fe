import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput! # 변수타입
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      # 실제 전달할 변수
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "송이",
        createProductInput: {
          name: "마우스",
          detail: "정말 굿 마우스",
          price: 3000,
        },
      },
    });
    console.log(result);
  };

  //한줄 일 시 () X
  return <button onClick={onClickSubmit}>Graphql - api 요청</button>;
}
