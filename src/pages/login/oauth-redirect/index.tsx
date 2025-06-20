import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { https } from "../../../apis/instance";
import axios from "axios";
import { components } from "../../../types/server";

const loginKakao = async ({ code }: { code: string }) => {
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

  try {
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
  } catch (error) {
    const { accessToken, refreshToken }: components["schemas"]["JoinSocialResponse"] = await https.post(
      "/login/social",
      {
        socialAccessToken: data.access_token,
        loginType: "KAKAO",
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
    return;
  }
};

const loginNaver = async ({ code, state }: { code: string; state: string }) => {
  const { data } = await axios.post(
    "https://nid.naver.com/oauth2.0/token",
    {
      grant_type: "authorization_code",
      client_id: import.meta.env.VITE_NAVER_CLIENT_ID,
      client_secret: import.meta.env.VITE_NAVER_CLIENT_SECRET,
      code,
      state,
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    },
  );

  try {
    const { accessToken, refreshToken }: components["schemas"]["JoinSocialResponse"] = await https.post(
      "/members/social",
      {
        socialAccessToken: data.access_token,
        joinType: "NAVER",
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
  } catch (error) {
    const { accessToken, refreshToken }: components["schemas"]["JoinSocialResponse"] = await https.post(
      "/login/social",
      {
        socialAccessToken: data.access_token,
        loginType: "NAVER",
      },
    );

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    window.location.href = "/";
  }
};

const OauthRedirectPage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("code")) return;

    if (searchParams.get("join-type") === "KAKAO") {
      loginKakao({ code: searchParams.get("code")! });
    }

    if (searchParams.get("join-type") === "NAVER") {
      loginNaver({ code: searchParams.get("code")!, state: searchParams.get("state")! });
    }
  }, [searchParams.get("code")]);

  return <div>로그인 처리중</div>;
};

export default OauthRedirectPage;
