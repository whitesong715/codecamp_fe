import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { restoreAccessTokenLoadable } from "../../../stores";
import { useRecoilValueLoadable } from "recoil";

export const 로그인체크 = (컴포넌트: any) => (프롭스: any) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 1. 로그인체크(refreshToken 이전)
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     alert("로그인 후 이용가능합니다");
  //     void router.push("/45sec/23-05-login-check-hoc");
  //   }
  // }, []);

  // 2. 로그인체크(refreshToken 이후) ==> 안좋음(_app.tsx에 이어 2번호출)
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     if (newAccessToken === undefined) {
  //       alert("로그인 후 이용가능합니다");
  //       void router.push("/45sec/23-05-login-check-hoc");
  //     }
  //   });
  // }, []);

  // 2. 로그인체크(refreshToken 이후) ==> 좋음(함수를 공유하므로 _app.tsx 포함 1번 호출)
  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용가능합니다");
        void router.push("/45sec/23-05-login-check-hoc");
      }
    });
  }, []);

  return <컴포넌트 {...프롭스} />;
};
