/** @jsxImportSource @emotion/react */
import React from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { theme } from "../theme";
import Spacing from "../components/Spacing";

const NotFound404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div css={containerStyle}>
        <h1 css={codeStyle}>404</h1>
        <p css={descStyle}>페이지를 찾을 수 없습니다.</p>
        <Spacing height={24} />
        <button css={buttonStyle} onClick={() => navigate("/")}>
          홈으로 이동
        </button>
      </div>
    </>
  );
};

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${theme.colors.background.grey};
`;

const codeStyle = css`
  font-size: 5rem;
  font-weight: bold;
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.md};
`;

const descStyle = css`
  font-size: 1.25rem;
  color: ${theme.colors.text.secondary};
`;

const buttonStyle = css`
  margin-top: ${theme.spacing.lg};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  background-color: ${theme.colors.primary.main};
  border: none;
  border-radius: ${theme.borderRadius.sm};
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: ${theme.shadows.sm};

  &:hover {
    background-color: ${theme.colors.primary.dark};
    transform: translateY(-2px);
  }
`;

export default NotFound404;
