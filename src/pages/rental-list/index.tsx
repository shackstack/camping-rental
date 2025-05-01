import React from "react";
import styled from "@emotion/styled";
import Navbar from "../../components/Navbar";

const categories = ["전체", "텐트", "조리용품", "가구", "조명", "침구", "보관용품"];

const RentalListPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("전체");

  const filteredItems =
    activeCategory === "전체" ? sampleItems : sampleItems.filter((item) => item.category === activeCategory);

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
          {filteredItems.map((item) => (
            <Card key={item.id}>
              <CardImage style={{ backgroundImage: `url(${item.image})` }} />
              <CardContent>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Price>{item.price}</Price>
                <RentButton>대여하기</RentButton>
              </CardFooter>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </>
  );
};

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

// 샘플 데이터
const sampleItems = [
  {
    id: 1,
    name: "텐트 4인용",
    description: "가족 캠핑에 적합한 4인용 텐트입니다. 방수 기능이 뛰어나고 설치가 쉽습니다.",
    price: "15,000원/일",
    image: "https://via.placeholder.com/300x200?text=Tent",
    category: "텐트",
  },
  {
    id: 2,
    name: "캠핑 스토브",
    description: "가스 버너가 포함된 휴대용 캠핑 스토브입니다. 조리 시간이 빠르고 안정적입니다.",
    price: "8,000원/일",
    image: "https://via.placeholder.com/300x200?text=Stove",
    category: "조리용품",
  },
  {
    id: 3,
    name: "캠핑 체어",
    description: "편안한 착석감을 제공하는 접이식 캠핑 체어입니다. 휴대가 간편합니다.",
    price: "5,000원/일",
    image: "https://via.placeholder.com/300x200?text=Chair",
    category: "가구",
  },
  {
    id: 4,
    name: "캠핑 랜턴",
    description: "밝은 LED 조명을 제공하는 캠핑 랜턴입니다. 배터리 지속 시간이 깁니다.",
    price: "4,000원/일",
    image: "https://via.placeholder.com/300x200?text=Lantern",
    category: "조명",
  },
  {
    id: 5,
    name: "침낭",
    description: "보온성이 뛰어난 침낭입니다. 다양한 계절에 사용 가능합니다.",
    price: "7,000원/일",
    image: "https://via.placeholder.com/300x200?text=SleepingBag",
    category: "침구",
  },
  {
    id: 6,
    name: "아이스박스",
    description: "음식과 음료를 오래 보관할 수 있는 아이스박스입니다. 단열 기능이 뛰어납니다.",
    price: "6,000원/일",
    image: "https://via.placeholder.com/300x200?text=IceBox",
    category: "보관용품",
  },
];
