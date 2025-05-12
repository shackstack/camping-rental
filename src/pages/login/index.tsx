import styled from "@emotion/styled";
import kakao from "../../assets/social_login/kakao_login_btn.png";
import naver from "../../assets/social_login/naver_login_btn.png";
const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <Title>로그인</Title>

        <SocialLoginContainer>
          <Subtitle>소셜 계정으로 로그인</Subtitle>

          <SocialButtons>
            {/* 카카오 로그인 버튼 */}
            <img
              src={kakao}
              alt="카카오 로그인"
              onClick={() => {
                window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;
              }}
            />

            {/* 네이버 로그인 버튼 */}
            <img
              src={naver}
              alt="네이버 로그인"
              onClick={() => {
                window.location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=${import.meta.env.VITE_NAVER_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_NAVER_REDIRECT_URI}&response_type=code`;
              }}
            />
          </SocialButtons>
        </SocialLoginContainer>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;

// 스타일 컴포넌트 정의
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const LoginBox = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.8rem;
`;

const Subtitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #666;
  font-size: 1.2rem;
`;

const SocialLoginContainer = styled.div`
  margin-top: 2rem;
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  img {
    cursor: pointer;
    width: 48%;
  }
`;
