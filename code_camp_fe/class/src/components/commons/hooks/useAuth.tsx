import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = (): void => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용가능합니다");
      void router.push("/45sec/23-05-login-check-hoc");
    }
  }, []);
};
