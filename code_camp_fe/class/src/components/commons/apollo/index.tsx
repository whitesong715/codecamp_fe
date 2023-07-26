import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../stores";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { GraphQLClient, gql } from "graphql-request";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 프리렌더링 예제(process.browser)
  // if (process.browser) {
  //   console.log("나는 지금 브라우저다");
  //   alert("나는 지금 브라우저다");
  //   const result = localStorage.getItem("accessToken");
  //   setAccessToken(result ?? "");
  // } else {
  //   console.log("지금은 프론트엔드 서버");
  // }

  // 2. 프리렌더링 예제(type of window)
  // if (typeof window === "undefined") {
  //   console.log("나는 지금 브라우저다");
  // } else {
  //   console.log("지금은 프론트엔드 서버");
  // }

  // 3. 프리렌더링 무시 - useEffect
  useEffect(() => {
    console.log("나는 지금 브라우저다");
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  }, []);

  const RESTORE_ACCESS_TOKEN = gql`
    mutation {
      restoreAccessToken {
        accessToken
      }
    }
  `;

  const errorLink = onError(async ({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2. refreshToken으로 accessToken을 재발급 받기

          const graphQLClient = new GraphQLClient(
            "http://backend-practice.codebootcamp.co.kr/graphql",
          );
          const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
          const newAccessToken = result.restoreAccessToken.accessToken;
          setAccessToken(newAccessToken);

          // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청
          operation.getContext().headers;

          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              Authorization: `Bearer ${newAccessToken}`,
            },
          });

          forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시 저장 ==> 나중에 자세히
  });

  //prettier-ignore
  return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    );
}
