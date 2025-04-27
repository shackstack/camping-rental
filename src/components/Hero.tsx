/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/camping.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section css={heroStyle}>
      <div css={contentStyle}>
        <h2 css={titleStyle}>
          <span css={titleSpanStyle}>캠핑 장비를</span>
          <span css={titleSpanAccentStyle}>더 스마트하게 대여하세요</span>
        </h2>
        <p css={descriptionStyle}>
          필요한 캠핑 장비를 합리적인 가격으로 대여하세요. 전문가가 검증한 고품질 장비로 특별한 캠핑 경험을
          만들어보세요.
        </p>
        <button css={ctaButtonStyle} onClick={() => navigate("/rental-list")}>
          장비 둘러보기
        </button>
      </div>
      <div css={imageContainerStyle}>
        <img src={heroImage} alt="Hero Image" css={placeholderImageStyle} />
      </div>
    </section>
  );
};

const heroStyle = css`
  display: flex;
  min-height: calc(100vh - 64px);
  padding: 2rem;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const contentStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  z-index: 1;
`;

const titleStyle = css`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const titleSpanStyle = css`
  display: block;
  color: #333;
`;

const titleSpanAccentStyle = css`
  display: block;
  color: #4a90e2;
`;

const descriptionStyle = css`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ctaButtonStyle = css`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  background-color: #4a90e2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #357abd;
  }
`;

const imageContainerStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const placeholderImageStyle = css`
  width: 100%;
  height: 100%;
  background-color: #e9ecef;
  border-radius: 8px;
  object-fit: cover;
`;

export default Hero;
