import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ImagePreload(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const img = new Image();
    img.src = "강아지.png";
    img.onload = () => {};
  }, []);

  const onClickMove = (): void => {
    void router.push("/53sec/31-09-image-preload-moved");
  };

  return <button onClick={onClickMove}>페이지 이동하기</button>;
}
