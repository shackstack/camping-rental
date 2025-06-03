import { Suspense, useState } from "react";
import styled from "@emotion/styled";
import Navbar from "../../components/Navbar";
import { useProducts } from "../../hooks/@server/product";
import { useNavigate } from "react-router-dom";

const categories = ["전체", "텐트", "조리용품", "가구", "조명", "침구", "보관용품"];

const ProductList = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("전체");
  const { data, fetchNextPage, hasNextPage } = useProducts();

  const products = data.pages.flatMap((page) => page);

  const filteredProducts =
    activeCategory === "전체" ? products : products.filter((product) => product.code === activeCategory);

  return (
    <>
      <Navbar />
      <Container>
        <Header>
          <Title>캠핑용품 대여</Title>
          <Subtitle>필요한 캠핑용품을 합리적인 가격에 대여하세요</Subtitle>
        </Header>

        <FilterContainer>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>

        <CardGrid>
          {filteredProducts.map((product) => (
            <Card key={product.id} onClick={() => navigate(`/rental-list/${product.id}`)}>
              <CardImage style={{ backgroundImage: `url(${product.representativeImageUploadFileName})` }} />
              <CardContent>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.member.nickname}</CardDescription>
              </CardContent>
              <CardFooter>
                <Price>{product.price.disCountedPrice.toLocaleString()}원/일</Price>
                <RentButton>대여하기</RentButton>
              </CardFooter>
            </Card>
          ))}
        </CardGrid>

        {hasNextPage && <LoadMoreButton onClick={() => fetchNextPage()}>더 보기</LoadMoreButton>}
      </Container>
    </>
  );
};

const RentalListPage = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ProductList />
    </Suspense>
  );
};

const LoadingFallback = () => (
  <Container>
    <Header>
      <Title>캠핑용품 대여</Title>
      <Subtitle>필요한 캠핑용품을 합리적인 가격에 대여하세요</Subtitle>
    </Header>
    <CardGrid>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i}>
          <CardImage style={{ backgroundColor: "#f0f0f0" }} />
          <CardContent>
            <CardTitle style={{ backgroundColor: "#f0f0f0", height: "1.5rem", width: "80%" }} />
            <CardDescription style={{ backgroundColor: "#f0f0f0", height: "1rem", width: "60%" }} />
          </CardContent>
          <CardFooter>
            <Price style={{ backgroundColor: "#f0f0f0", height: "1.2rem", width: "40%" }} />
            <RentButton style={{ backgroundColor: "#f0f0f0", color: "transparent" }}>대여하기</RentButton>
          </CardFooter>
        </Card>
      ))}
    </CardGrid>
  </Container>
);

export default RentalListPage;

const Container = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const FilterButton = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.active ? "#4CAF50" : "#ddd")};
  background-color: ${(props) => (props.active ? "#E8F5E9" : "white")};
  color: ${(props) => (props.active ? "#4CAF50" : "#666")};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => (props.active ? "#E8F5E9" : "#f5f5f5")};
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  background-color: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 1rem;
`;

const Price = styled.span`
  font-weight: bold;
  color: #4caf50;
  font-size: 1.1rem;
`;

const RentButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #43a047;
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 0.8rem 2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #43a047;
  }
`;
