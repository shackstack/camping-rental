/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <div css={pageStyle}>
      <Navbar />
      <Hero />
    </div>
  );
};

const pageStyle = css`
  min-height: 100vh;
  background-color: white;
`;

export default LandingPage;
