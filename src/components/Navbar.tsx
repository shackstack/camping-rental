/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

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
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const containerStyle = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const logoStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

const loginButtonStyle = css`
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #357abd;
  }
`;

export default Navbar;
