import { useRouter } from "next/router";
export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/27sec/05-03-static-board-query-moved/1");
  };

  const onClickMove2 = () => {
    router.push("/27sec/05-03-static-board-query-moved/2");
  };

  const onClickMove3 = () => {
    router.push("/27sec/05-03-static-board-query-moved/3");
  };

  return (
    <div>
      <button onClick={onClickMove1}>페이지 이동</button>;
      <button onClick={onClickMove2}>페이지 이동</button>;
      <button onClick={onClickMove3}>페이지 이동</button>;
    </div>
  );
}
