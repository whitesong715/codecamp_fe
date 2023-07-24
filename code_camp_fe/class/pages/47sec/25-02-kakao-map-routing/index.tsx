import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = (): void => {
    void router.push("/47sec/25-02-kakao-map-routing-moved");
  };

  return (
    <>
      <button onClick={onClickMove}>페이지 이동하기</button>

      {/* 매 페이지를 새로 다운받으므로 SPA 활용 불가 */}
      <a href="/47sec/25-02-kakao-map-routing-moved">URL</a>

      {/* Next에서 제공하는 a태그이므로, SPA 활용가능 + <a>를 써서 검색엔진 굿 */}
      <Link href="/47sec/25-02-kakao-map-routing-moved">
        <a>Next.js 방식으로 화면이동</a>
      </Link>

      {/* 시멘틱 태그 다양하게 사용 -> 검색엔진 굿 */}
    </>
  );
}
