import { gql, useApolloClient } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function Login(): JSX.Element {
  // 1. 페이지에 접속하면 자동으로 data에 받아지고(data는 글로벌 스테이트), 리렌더링
  // const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 2. 버튼 클릭 시 data에 받아지고(data는 글로벌 스테이트), 리렌더링
  // const [myfunction, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  // 3. axios처럼 사용하는 방법
  // const client = useApolloClient()
  // client.query() <==> axios.get()

  const client = useApolloClient();

  const onClickButton = async (): Promise<void> => {
    console.log("버튼클릭");
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
    console.log(result);
  };

  return <button onClick={wrapAsync(onClickButton)}>클릭</button>;
  // return <>{data?.fetchUserLoggedIn.name}님 환영합니다</>;
}
