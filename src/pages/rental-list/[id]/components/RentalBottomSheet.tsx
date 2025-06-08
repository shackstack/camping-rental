import { components } from "../../../../types/server";
import styled from "@emotion/styled";

interface RentalBottomSheetProps {
  product: components["schemas"]["QueryProductDetailResponse"];
  selectedOptions: { [optionId: number]: number | undefined };
}

const RentalBottomSheet = ({ product, selectedOptions }: RentalBottomSheetProps) => {
  // 총 가격 계산 함수
  const getTotalPrice = () => {
    if (!product) return 0;
    let total = product.price.disCountedPrice;
    if (product.options && product.options.length > 0) {
      product.options.forEach((option) => {
        const selectedChoiceId = selectedOptions[option.id];
        const selectedChoice = option.choices.find((c) => c.id === selectedChoiceId);
        if (selectedChoice && selectedChoice.additionalPrice) {
          total += selectedChoice.additionalPrice;
        }
      });
    }
    return total;
  };

  return (
    <BottomSheet>
      <BottomSheetContent>
        <div>
          <strong>선택 옵션:</strong>
          {product.options && product.options.length > 0 ? (
            product.options.map((option) => {
              const selectedChoiceId = selectedOptions[option.id];
              const selectedChoice = option.choices.find((c) => c.id === selectedChoiceId);
              return (
                <span key={option.id} style={{ marginLeft: 8, marginRight: 16 }}>
                  {option.title}: {selectedChoice ? selectedChoice.name : "미선택"}
                </span>
              );
            })
          ) : (
            <span style={{ marginLeft: 8 }}>옵션 없음</span>
          )}
        </div>
        <PriceSummary>
          <span>총 결제금액</span>
          <TotalPrice>{getTotalPrice().toLocaleString()}원</TotalPrice>
        </PriceSummary>
        <BottomRentButton
          disabled={
            product.options &&
            product.options.length > 0 &&
            product.options.some((option) => !selectedOptions[option.id])
          }
        >
          대여하기
        </BottomRentButton>
      </BottomSheetContent>
    </BottomSheet>
  );
};

export default RentalBottomSheet;

const BottomSheet = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.08);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  z-index: 200;
  padding: 0;
`;

const BottomSheetContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1.1rem 1.5rem 1.3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const PriceSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.13rem;
  margin-top: 0.2rem;
`;

const TotalPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #e53935;
`;

const BottomRentButton = styled.button`
  width: 100%;
  background: #4caf50;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 0;
  margin-top: 0.7rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover:enabled {
    background: #388e3c;
  }
  &:disabled {
    background: #bdbdbd;
    cursor: not-allowed;
  }
`;

const RentButton = styled.button`
  background: #4caf50;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 0.9rem 0;
  margin: 1.2rem 0 0.5rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #388e3c;
  }
`;
