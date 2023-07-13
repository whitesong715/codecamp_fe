// import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache() // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시 저장 ==> 나중에 자세히
  })

  return (
    <div>
      <div>=============안녕안녕 반가워=====================</div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
      <div>=============안녕안녕 반가워=====================</div>
    </div>
  )
}
