import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IApolloProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloProps): JSX.Element {
  const client = new ApolloClient({
    // uri: "http://backend-example.codebootcamp.co.kr/graphql", //~36sec내용
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시 저장 ==> 나중에 자세히
  });

  //prettier-ignore
  return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    );
}
