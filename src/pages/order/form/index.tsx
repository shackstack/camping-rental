import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const OrderFormPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`주소: ${address}\n전화번호: ${phone}`);
    // 실제 주문 처리 로직은 여기에 추가
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h2 style={{ marginBottom: 8 }}>주문서 작성</h2>
      {productId && (
        <div style={{ marginBottom: 24, color: "#888", fontSize: 14 }}>
          주문 상품 ID: <b>{productId}</b>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", marginBottom: 8 }}>배송지 주소</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="주소를 입력하세요"
            required
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: "block", marginBottom: 8 }}>전화번호</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="전화번호를 입력하세요"
            required
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            background: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: 4,
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          주문 완료
        </button>
      </form>
    </div>
  );
};

export default OrderFormPage;
