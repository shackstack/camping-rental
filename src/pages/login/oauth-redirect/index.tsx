import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const OauthRedirectPage = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
  }, []);

  return <div>로그인 처리중</div>;
};

export default OauthRedirectPage;
