import { useState } from "react";
import { components } from "../../../../types/server";
import styled from "@emotion/styled";

interface RentalBottomSheetProps {
  product: components["schemas"]["QueryProductDetailResponse"];
  open: boolean;
  onClose?: () => void;
}

const RentalBottomSheet = ({ product, open, onClose }: RentalBottomSheetProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{ [optionId: number]: number | undefined }>({});

  // open이 false면 렌더링하지 않음
  if (!open) return null;

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
      <CloseButton onClick={onClose} aria-label="닫기">
        ×
      </CloseButton>
      <BottomSheetContent>
        <div>
          <strong>선택 옵션:</strong>
          {product.options && product.options.length > 0 && (
            <OptionSelectWrapper>
              {product.options.map((option) => (
                <OptionBox key={option.id}>
                  <OptionLabel>{option.title}</OptionLabel>
                  <OptionSelect
                    value={selectedOptions[option.id] ?? ""}
                    onChange={(e) => {
                      const value = e.target.value ? Number(e.target.value) : undefined;
                      setSelectedOptions((prev) => ({ ...prev, [option.id]: value }));
                    }}
                  >
                    <option value="">선택하세요</option>
                    {option.choices.map((choice) => (
                      <option key={choice.id} value={choice.id}>
                        {choice.name}
                        {choice.additionalPrice > 0 ? ` (+${choice.additionalPrice.toLocaleString()}원)` : ""}
                      </option>
                    ))}
                  </OptionSelect>
                </OptionBox>
              ))}
            </OptionSelectWrapper>
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

const OptionSelectWrapper = styled.div`
  margin: 1.2rem 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const OptionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const OptionLabel = styled.label`
  font-size: 1.08rem;
  color: #333;
  min-width: 90px;
`;

const OptionSelect = styled.select`
  font-size: 1.08rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fafbfc;
  min-width: 180px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #888;
  cursor: pointer;
  z-index: 10;
  padding: 0;
  line-height: 1;
  transition: color 0.15s;
  &:hover {
    color: #e53935;
  }
`;
