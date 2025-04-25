import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { https } from "../../../apis/instance";
import axios from "axios";
import { components } from "../../../types/server";

const login = async ({ code }: { code: string }) => {
  const { data } = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    {
      grant_type: "authorization_code",
      client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
      code,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    },
  );

  const { accessToken, refreshToken }: components["schemas"]["JoinSocialResponse"] = await https.post(
    "/members/social",
    {
      socialAccessToken: data.access_token,
      joinType: "KAKAO",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);

  window.location.href = "/";
};

const OauthRedirectPage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has("code")) {
      login({ code: searchParams.get("code")! });
    }
  }, []);

  return <div>로그인 처리중</div>;
};

export default OauthRedirectPage;
