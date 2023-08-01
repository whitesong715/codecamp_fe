// 제공자일때 => 네이버, 다음
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import { GraphQLClient } from "graphql-request";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProvider(props: any): JSX.Element {
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: "64b0f1c25d6eaa0029f77482" },
  });

  return (
    <>
      <Head>
        <meta property="og:title" content={props?.qqq.name} />
        <meta property="og:description" content={props?.qqq.remarks} />
        <meta property="of:image" content={props?.qqq.images?.[0]} />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다!(여기는 Body입니다)</div>
    </>
  );
}

// 1. getServerSideProps는 존재하는 단어이므로 변경불가능
// 2. 여기는 서버에서만 실행됨(프론트엔드 서버프로그램 => webpack서버 프로그램)
export const getServerSideProps = async (): Promise<any> => {
  // 1. 백엔드에 데이터요청로직
  const graphqlClient = new GraphQLClient(
    "https://backend-practice.codebootcamp.co.kr/graphql",
  );
  const result = await graphqlClient.request(FETCH_USEDITEM, {
    useditemId: "64b0f1c25d6eaa0029f77482",
  });

  // 2. 받은 결과를 return
  return {
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
