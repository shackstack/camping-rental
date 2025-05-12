import styled from "@emotion/styled";

const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <Title>로그인</Title>

        <SocialLoginContainer>
          <Subtitle>소셜 계정으로 로그인</Subtitle>

          <SocialButtons>
            {/* 카카오 로그인 버튼 */}
            <SocialButton
              variant="kakao"
              onClick={() => {
                window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;
              }}
            >
              <ButtonImagePlaceholder />
              카카오로 시작하기
            </SocialButton>

            {/* 네이버 로그인 버튼 */}
            <SocialButton
              variant="naver"
              onClick={() => {
                window.location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=${import.meta.env.VITE_NAVER_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_NAVER_REDIRECT_URI}&response_type=code`;
              }}
            >
              <ButtonImagePlaceholder />
              네이버로 시작하기
            </SocialButton>

            {/* 구글 로그인 버튼 */}
            {/* <SocialButton variant="google">
              <ButtonImagePlaceholder />
              Google로 시작하기
            </SocialButton> */}
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
  flex-direction: column;
  gap: 1rem;
`;

const SocialButton = styled.button<{ variant: "kakao" | "naver" | "google" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.8rem;
  border: ${(props) => (props.variant === "google" ? "1px solid #ddd" : "none")};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  background-color: ${(props) => {
    switch (props.variant) {
      case "kakao":
        return "#FEE500";
      case "naver":
        return "#03C75A";
      case "google":
        return "white";
      default:
        return "white";
    }
  }};

  color: ${(props) => {
    switch (props.variant) {
      case "kakao":
        return "#000000";
      case "naver":
        return "white";
      case "google":
        return "#757575";
      default:
        return "#333";
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.variant) {
        case "kakao":
          return "#E6CF00";
        case "naver":
          return "#02B350";
        case "google":
          return "#f5f5f5";
        default:
          return "#f5f5f5";
      }
    }};
  }
`;

const ButtonImagePlaceholder = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
`;
