/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { theme } from "../theme";
import { useEffect, useState } from "react";
import Drawer from "./Drawer";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!accessToken);
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("accessToken");
      setIsLoggedIn(false);
      navigate("/");
    } else {
      navigate("/login");
    }
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav css={navStyle}>
        <div css={containerStyle}>
          <h1 css={logoStyle} onClick={() => navigate("/")}>
            캠핑 렌탈
          </h1>
          <button css={menuButtonStyle} onClick={() => setIsDrawerOpen(true)}>
            ☰
          </button>
        </div>
      </nav>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div css={drawerContentStyle}>
          {isLoggedIn && (
            <button
              css={drawerMenuButton}
              onClick={() => {
                navigate("/my-orders");
                setIsDrawerOpen(false);
              }}
            >
              내 주문
            </button>
          )}
          <button css={isLoggedIn ? drawerLogoutButton : drawerMenuButton} onClick={handleAuthClick}>
            {isLoggedIn ? "로그아웃" : "로그인"}
          </button>
        </div>
      </Drawer>
    </>
  );
};

const navStyle = css`
  background-color: ${theme.colors.background.paper};
  box-shadow: ${theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 999;
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

const menuButtonStyle = css`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${theme.colors.text.primary};
`;

const drawerContentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-top: 60px;
`;

const drawerMenuButton = css`
  display: block;
  width: 100%;
  text-align: left;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${theme.colors.grey[50]};
  color: ${theme.colors.text.primary};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.grey[100]};
    transform: translateX(4px);
  }
`;

const drawerLogoutButton = css`
  ${drawerMenuButton};

  &:hover {
    background-color: #fee2e2;
    color: #b91c1c;
    transform: translateX(4px);
  }
`;

export default Navbar;
