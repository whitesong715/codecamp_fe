// 제공자일때 => 네이버, 다음
import Head from "next/head";

export default function OpengraphProvider(): JSX.Element {
  return (
    <>
      <Head>
        <meta property="og:title" content="중고마켓" />
        <meta property="og:description" content="환영합ㄴ디ㅏ" />
        <meta property="of:image" content="https:// ~~~~~" />
      </Head>
      <div>중고마켓에 오신 것을 환영합니다!(여기는 Body입니다)</div>;
    </>
  );
}
