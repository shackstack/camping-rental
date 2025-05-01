/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { theme } from "../theme";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav css={navStyle}>
      <div css={containerStyle}>
        <h1 css={logoStyle} onClick={() => navigate("/")}>
          캠핑 렌탈
        </h1>
        <button css={loginButtonStyle} onClick={() => navigate("/login")}>
          로그인
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

const loginButtonStyle = css`
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background-color: ${theme.colors.primary.main};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.sm};
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.primary.dark};
  }
`;

export default Navbar;
