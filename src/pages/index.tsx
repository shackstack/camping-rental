/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../theme";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/camping.png";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section css={heroStyle}>
        <div css={containerStyle}>
          <div css={contentStyle}>
            <h2 css={titleStyle}>
              <span css={titleSpanStyle}>캠핑 장비를</span>
              <span css={titleSpanAccentStyle}>더 스마트하게 대여하세요</span>
            </h2>
            <p css={descriptionStyle}>
              필요한 캠핑 장비를 합리적인 가격으로 대여하세요.
              <br />
              전문가가 검증한 고품질 장비로 특별한 캠핑 경험을 만들어보세요.
            </p>
            <button css={ctaButtonStyle} onClick={() => navigate("/rental-list")}>
              장비 둘러보기
            </button>
          </div>
          <div css={imageContainerStyle}>
            <img src={heroImage} alt="Hero Image" css={placeholderImageStyle} />
          </div>
        </div>
      </section>
    </>
  );
};

const heroStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background.grey};
  overflow: hidden;
  min-height: calc(100vh - 64px);
`;

const containerStyle = css`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
  max-width: ${theme.breakpoints.wide};
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: ${theme.spacing.lg} ${theme.spacing.md};
    text-align: center;
  }
`;

const contentStyle = css`
  flex: 1;
  max-width: 540px;
`;

const titleStyle = css`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.25rem;
  }
`;

const titleSpanStyle = css`
  display: block;
  color: ${theme.colors.text.primary};
`;

const titleSpanAccentStyle = css`
  display: block;
  color: ${theme.colors.primary.main};
  margin-top: ${theme.spacing.xs};
`;

const descriptionStyle = css`
  font-size: 1.125rem;
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.6;
`;

const ctaButtonStyle = css`
  display: inline-block;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  background-color: ${theme.colors.primary.main};
  border: none;
  border-radius: ${theme.borderRadius.sm};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${theme.colors.primary.dark};
    transform: translateY(-2px);
  }
`;

const imageContainerStyle = css`
  flex: 1;
  max-width: 540px;
  aspect-ratio: 4/3;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    margin-top: ${theme.spacing.xl};
  }
`;

const placeholderImageStyle = css`
  width: 100%;
  height: 100%;
  border-radius: ${theme.borderRadius.md};
  object-fit: cover;
`;

export default LandingPage;
