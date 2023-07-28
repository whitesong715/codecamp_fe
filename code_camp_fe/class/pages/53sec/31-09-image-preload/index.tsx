import { useRouter } from "next/router";
import { useEffect } from "react";

const qqq = [];

export default function ImagePreload(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://blog.kakaocdn.net/dn/dP8ypg/btqBO7WjtW8/uTKrFK74r6MjHg3n3lPPXK/img.jpg";
    img.onload = () => {
      qqq.push(img);
    };
  }, []);

  const onClickMove = (): void => {
    void router.push("/53sec/31-09-image-preload-moved");
  };

  return <button onClick={onClickMove}>페이지 이동하기</button>;
}
