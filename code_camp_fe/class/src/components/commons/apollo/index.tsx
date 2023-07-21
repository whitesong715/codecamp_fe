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

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시 저장 ==> 나중에 자세히
  });

  //prettier-ignore
  return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    );
}
