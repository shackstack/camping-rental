import { useProductDetail } from "../../../hooks/@server/product";
import { useParams, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useState } from "react";
import RentalBottomSheet from "./components/RentalBottomSheet";
import Spacing from "../../../components/Spacing";
import Divider from "../../../components/Divider";
const RentalDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const { data: product } = useProductDetail(productId);
  const [mainImageIdx, setMainImageIdx] = useState(0);
  const navigate = useNavigate();
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  if (!product) return <div>존재하지 않는 상품입니다.</div>;

  const images = product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls : [null];

  return (
    <>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 20.5L6 12L15 3.5" stroke="#2A2A2E" stroke-width="1.5" stroke-linecap="square" />
          </svg>
        </BackButton>
        <HeaderTitle>상품 상세</HeaderTitle>
      </Header>
      <PageWrapper>
        <ContentWrapper>
          <LeftSection>
            <MainImageBox>
              {images[mainImageIdx] ? (
                <MainImage src={images[mainImageIdx]} alt={product.title} />
              ) : (
                <ImagePlaceholder>이미지 없음</ImagePlaceholder>
              )}
            </MainImageBox>
            {images.length > 1 && (
              <ThumbnailList>
                {images.map((img, idx) => (
                  <Thumbnail
                    key={idx}
                    src={img || undefined}
                    alt={product.title + "-thumb-" + idx}
                    selected={mainImageIdx === idx}
                    onClick={() => setMainImageIdx(idx)}
                  />
                ))}
              </ThumbnailList>
            )}
          </LeftSection>
          <RightSection>
            <Title>{product.title}</Title>
            <PriceBox>
              <Price>{product.price.disCountedPrice.toLocaleString()}원</Price>
              {product.price.discountRate > 0 && (
                <Discount>
                  {product.price.discountRate * 100}%↓{" "}
                  <OriginPrice>{product.price.originalPrice.toLocaleString()}원</OriginPrice>
                </Discount>
              )}
            </PriceBox>
            <InfoTable>
              <tr>
                <th>재고</th>
                <td>{product.stockCount}개</td>
              </tr>
              <tr>
                <th rowSpan={4}>판매자</th>
              </tr>
              <tr>
                <th>닉네임</th>
                <td>{product.sellerInformation.nickname}</td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>{product.sellerInformation.email}</td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>{product.sellerInformation.phone}</td>
              </tr>
              <tr>
                <th>배송</th>
                <td>
                  {product.possibleDeliveryTypes.map((type) => (type === "COURIER" ? "택배" : "직접수령")).join(", ")}
                </td>
              </tr>
            </InfoTable>
            <Divider />
            <SectionTitle>상품 설명</SectionTitle>
            <Description>{product.description}</Description>
          </RightSection>
        </ContentWrapper>
      </PageWrapper>
      <DetailImagesWrapper>
        {product.detailImageUrls && product.detailImageUrls.length > 0 ? (
          product.detailImageUrls.map((url, idx) => <DetailImage key={idx} src={url} alt={`상세 이미지 ${idx + 1}`} />)
        ) : (
          <NoDetailImage>상세 이미지가 없습니다.</NoDetailImage>
        )}
      </DetailImagesWrapper>
      {/* 바텀시트 */}
      <Spacing height={200} />
      <RentalBottomSheet product={product} open={isBottomSheetOpen} onClose={() => setIsBottomSheetOpen(false)} />
      {!isBottomSheetOpen && <FloatingButton onClick={() => setIsBottomSheetOpen(true)}>대여하기</FloatingButton>}
    </>
  );
};

export default RentalDetailPage;

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 0 0 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
  background: #fff;

  padding: 2.5rem 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem 0.5rem;
  }
`;

const LeftSection = styled.div`
  flex: 1.1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImageBox = styled.div`
  width: 420px;
  height: 320px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  @media (max-width: 600px) {
    width: 100%;
    height: 220px;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 1.2rem;
`;

const ThumbnailList = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Thumbnail = styled.img<{ selected: boolean }>`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid ${({ selected }) => (selected ? "#4caf50" : "#eee")};
  cursor: pointer;
  background: #f0f0f0;
`;

const RightSection = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Title = styled.h1`
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  word-break: break-all;
  line-height: 1.4;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.2rem;
`;

const Price = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  color: #e53935;
`;

const Discount = styled.span`
  font-size: 1.1rem;
  color: #388e3c;
  margin-left: 0.5rem;
`;

const OriginPrice = styled.span`
  font-size: 1rem;
  color: #aaa;
  text-decoration: line-through;
  margin-left: 0.3rem;
`;

const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1.2rem 0 1.5rem 0;
  border: 1px solid #e0e0e0;
  th,
  td {
    padding: 0.5rem 0.7rem;
    text-align: left;
    font-size: 1.05rem;
    border: 1px solid #e0e0e0;
  }
  th {
    color: #888;
    width: 90px;
    font-weight: 500;
    background: #f7f7f7;
  }
  td {
    color: #333;
    background: #fff;
  }
  tr:last-child th,
  tr:last-child td {
    border-bottom: none;
  }
  tr th:last-child,
  tr td:last-child {
    border-right: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
  margin: 1.5rem 0 0.5rem 0;
  color: #222;
`;

const Description = styled.p`
  font-size: 1.08rem;
  color: #555;
  line-height: 1.7;
`;

const DetailImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0 1rem 0;
`;

const DetailImage = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  object-fit: contain;

  margin: 0 auto;
`;

const NoDetailImage = styled.div`
  color: #aaa;
  font-size: 1.05rem;
  padding: 2rem 0;
  text-align: center;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 1.1rem 2rem 1.1rem 1.2rem;
  border-bottom: 1px solid #eee;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #388e3c;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.3rem 0.7rem 0.3rem 0.2rem;
  border-radius: 6px;
  transition: background 0.15s;
`;

const HeaderTitle = styled.h1`
  font-size: 1.18rem;
  font-weight: 700;
  color: #222;
  margin: 0;
`;

const FloatingButton = styled.button`
  position: fixed;
  right: 24px;
  bottom: 32px;
  z-index: 300;
  background: #4caf50;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  border: none;
  border-radius: 50px;
  padding: 1.1rem 2.1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.13);
  cursor: pointer;
  transition: background 0.18s;
  &:hover {
    background: #388e3c;
  }
`;
