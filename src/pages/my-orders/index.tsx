import styled from "@emotion/styled";
import { Suspense } from "react";
import Navbar from "../../components/Navbar";
import { useMyOrders, useCancelOrder } from "../../hooks/@server/order";
import { components } from "../../types/server";
import { overlay } from "overlay-kit";
import OrderDetailDialog from "./components/OrderDetailDialog";

export const OrderStatus: Record<components["schemas"]["QueryMyOrderResponse"]["status"], string> = {
  PAYMENT_PENDING: "결제 대기",
  CONFIRMATION_PENDING: "확정 대기",
  DELIVERY_READY: "배송 준비중",
  DELIVERING: "배송중",
  DELIVERY_COMPLETED: "배송 완료",
  RETURN_PENDING: "반납 대기",
  RETURNING: "반납중",
  RETURNED: "반납 완료",
  PAYMENT_FAIL: "결제 실패",
  CONFIRMATION_CANCEL: "주문 취소",
  PAYMENT_CANCEL: "결제 취소",
  REFUND_RETURN_PENDING: "환불/반납 대기",
  REFUND_RETURNING: "환불/반납중",
  REFUND_RETURN_COMPLETED: "환불/반납 완료",
  REFUND_PENDING: "환불 대기",
  REFUND_COMPLETED: "환불 완료",
};

const MyOrderList = () => {
  const { data } = useMyOrders();
  const { mutate: cancelOrder } = useCancelOrder();
  const orders = data.pages.flatMap((page) => page.responses);

  const handleShowDetails = (order: components["schemas"]["QueryMyOrderResponse"]) => {
    overlay.open(({ close, isOpen }) => <OrderDetailDialog order={order} isOpen={isOpen} close={close} />);
  };

  const handleCancelOrder = (id: number) => {
    if (window.confirm("정말로 주문을 취소하시겠습니까?")) {
      cancelOrder(id);
    }
  };

  return (
    <Container>
      <Header>
        <Title>내 주문 내역</Title>
      </Header>
      {orders.length === 0 ? (
        <EmptyMessage>주문 내역이 없습니다.</EmptyMessage>
      ) : (
        <OrderGrid>
          {orders.map((order) => (
            <OrderCard key={order.id}>
              <CardHeader>
                <span>주문번호: {order.id}</span>
                <StatusLabel status={order.status}>{OrderStatus[order.status]}</StatusLabel>
              </CardHeader>
              <CardBody>
                <div>상품 ID: {order.productId}</div>
                <div>
                  대여 기간: {new Date(order.rentalPeriod.startDateTime).toLocaleDateString()} ~{" "}
                  {new Date(order.rentalPeriod.endDateTime).toLocaleDateString()}
                </div>
                <div>총 가격: {order.totalPrice.toLocaleString()}원</div>
              </CardBody>
              <CardFooter>
                <DetailButton onClick={() => handleShowDetails(order)}>상세보기</DetailButton>
                <CancelButton onClick={() => handleCancelOrder(order.id)}>주문 취소</CancelButton>
              </CardFooter>
            </OrderCard>
          ))}
        </OrderGrid>
      )}
    </Container>
  );
};

const MyOrdersPage = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<>Loading...</>}>
        <MyOrderList />
      </Suspense>
    </>
  );
};

export default MyOrdersPage;

// --- Styles ---
const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 50px;
  color: #888;
  font-size: 16px;
`;

const OrderGrid = styled.div`
  display: grid;
  gap: 20px;
`;

const OrderCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  padding: 24px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  color: #555;
`;

const StatusLabel = styled.span<{ status: string }>`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  background-color: ${({ status }) => (status.includes("CANCEL") || status.includes("FAIL") ? "#e53935" : "#388e3c")};
`;

const CardBody = styled.div`
  display: grid;
  gap: 12px;
  font-size: 15px;
  color: #333;
`;

const CardFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const DetailButton = styled.button`
  background: #222;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
`;

const CancelButton = styled.button`
  background: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
  &:hover {
    background: #d32f2f;
  }
`;
