import { useRouter } from "next/router";
export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/27sec/05-01-static-moved");
  };

  return <button onClick={onClickMove}>페이지 이동</button>;
}
