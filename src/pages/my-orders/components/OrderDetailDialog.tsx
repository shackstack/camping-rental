import styled from "@emotion/styled";
import { components } from "../../../types/server";
import { OrderStatus } from "..";

interface OrderDetailDialogProps {
  order: components["schemas"]["QueryMyOrderResponse"];
  isOpen: boolean;
  close: () => void;
}

const OrderDetailDialog = ({ order, isOpen, close }: OrderDetailDialogProps) => {
  return (
    isOpen && (
      <DialogBackdrop onClick={close}>
        <DialogContent onClick={(e) => e.stopPropagation()}>
          <DialogHeader>
            <h2>주문 상세 정보</h2>
            <CloseButton onClick={close}>&times;</CloseButton>
          </DialogHeader>
          <Section>
            <SectionTitle>주문 정보</SectionTitle>
            <InfoGrid>
              <InfoItem>
                <Label>주문 번호</Label>
                <Value>{order.id}</Value>
              </InfoItem>
              <InfoItem>
                <Label>주문 상태</Label>
                <Value>
                  <StatusLabel status={order.status}>{OrderStatus[order.status]}</StatusLabel>
                </Value>
              </InfoItem>
              <InfoItem>
                <Label>상품 ID</Label>
                <Value>{order.productId}</Value>
              </InfoItem>
              <InfoItem>
                <Label>총 결제 금액</Label>
                <Value>{order.totalPrice.toLocaleString()}원</Value>
              </InfoItem>
            </InfoGrid>
          </Section>
          <Section>
            <SectionTitle>배송 정보</SectionTitle>
            <InfoGrid>
              <InfoItem>
                <Label>수령인</Label>
                <Value>{order.deliveryInformation.recipientName}</Value>
              </InfoItem>
              <InfoItem>
                <Label>연락처</Label>
                <Value>{order.deliveryInformation.recipientPhone}</Value>
              </InfoItem>
              <InfoItem fullWidth>
                <Label>주소</Label>
                <Value>{`${order.deliveryInformation.deliveryAddress} ${order.deliveryInformation.deliveryDetailAddress} (${order.deliveryInformation.postalCode})`}</Value>
              </InfoItem>
              <InfoItem fullWidth>
                <Label>배송 요청사항</Label>
                <Value>{order.deliveryInformation.deliveryRequestMessage || "없음"}</Value>
              </InfoItem>
            </InfoGrid>
          </Section>
          <DialogFooter>
            <ConfirmButton onClick={close}>확인</ConfirmButton>
          </DialogFooter>
        </DialogContent>
      </DialogBackdrop>
    )
  );
};

export default OrderDetailDialog;

// --- Styles ---
const DialogBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DialogContent = styled.div`
  background: white;
  padding: 24px 32px;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  max-height: 80vh;
  overflow-y: auto;
`;

const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  h2 {
    font-size: 22px;
    font-weight: 700;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #888;
`;

const Section = styled.section`
  margin-bottom: 28px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px 20px;
`;

const InfoItem = styled.div<{ fullWidth?: boolean }>`
  ${({ fullWidth }) => fullWidth && `grid-column: 1 / -1;`}
`;

const Label = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
`;

const Value = styled.div`
  font-size: 16px;
  color: #222;
  font-weight: 500;
`;

const StatusLabel = styled.span<{ status: string }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: ${({ status }) => (status.includes("CANCEL") || status.includes("FAIL") ? "#e53935" : "#388e3c")};
`;

const DialogFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const ConfirmButton = styled.button`
  background: #222;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
`;
