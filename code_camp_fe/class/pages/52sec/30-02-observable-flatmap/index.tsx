import { Observable } from "@apollo/client";
import { from } from "zen-observable";

export default function ObservableFlatmap() {
  const onClickButton = (): void => {
    // new Promise((resolve, reject) => {});
    // new Observable((observable) => {});

    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"]) //fromPromise
      .flatMap((el) => from([`${el}결과에 qqq적용`, `${el}결과에 xxx적용`]))
      .subcrible((el) => {
        console.log(el);
      });
  };

  return <button onClick={onClickButton}>클릭</button>;
}
