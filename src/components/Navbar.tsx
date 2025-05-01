/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { theme } from "../theme";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!accessToken);
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // 로그아웃 처리
      localStorage.removeItem("accessToken");
      setIsLoggedIn(false);
      navigate("/");
    } else {
      // 로그인 페이지로 이동
      navigate("/login");
    }
  };

  return (
    <nav css={navStyle}>
      <div css={containerStyle}>
        <h1 css={logoStyle} onClick={() => navigate("/")}>
          캠핑 렌탈
        </h1>
        <button css={[buttonStyle, isLoggedIn ? logoutButtonStyle : loginButtonStyle]} onClick={handleAuthClick}>
          {isLoggedIn ? "로그아웃" : "로그인"}
        </button>
      </div>
    </nav>
  );
};

const navStyle = css`
  background-color: ${theme.colors.background.paper};
  box-shadow: ${theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const containerStyle = css`
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${theme.spacing.sm};
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const logoStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.text.primary};
  cursor: pointer;
`;

// 기본 버튼 스타일
const buttonStyle = css`
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border: none;
  border-radius: ${theme.borderRadius.sm};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
`;

// 로그인 버튼 스타일
const loginButtonStyle = css`
  background-color: ${theme.colors.primary.main};
  color: white;

  &:hover {
    background-color: ${theme.colors.primary.dark};
  }
`;

// 로그아웃 버튼 스타일
const logoutButtonStyle = css`
  background-color: ${theme.colors.grey[100]};
  color: ${theme.colors.text.primary};
  border: 1px solid ${theme.colors.grey[300]};

  &:hover {
    background-color: ${theme.colors.grey[200]};
  }
`;

export default Navbar;
