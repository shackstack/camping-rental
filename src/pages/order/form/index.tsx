import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const containerStyle: React.CSSProperties = {
  maxWidth: 960,
  margin: "48px auto",
  display: "flex",
  gap: 40,
  flexWrap: "wrap",
  padding: "0 16px",
};

const cardStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: 14,
  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  padding: 24,
  minWidth: 320,
  flex: 1,
  boxSizing: "border-box",
};

const summaryCardStyle: React.CSSProperties = {
  background: "#f7f8fa",
  borderRadius: 14,
  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
  padding: 24,
  minWidth: 260,
  flex: 0.9,
  boxSizing: "border-box",
  height: "fit-content",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 6,
  fontWeight: 500,
  fontSize: 15,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 6,
  border: "1px solid #d1d5db",
  fontSize: 16,
  background: "#fafbfc",
  boxSizing: "border-box",
};

const fieldGap = { marginBottom: 16 };

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px 0",
  background: "#222",
  color: "white",
  border: "none",
  borderRadius: 8,
  fontWeight: 700,
  fontSize: 18,
  marginTop: 20,
  letterSpacing: 1,
  cursor: "pointer",
  transition: "background 0.2s",
};

const titleStyle: React.CSSProperties = {
  marginBottom: 20,
  fontSize: 22,
  fontWeight: 700,
  letterSpacing: -1,
};

const summaryTitleStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  marginBottom: 14,
};

const summaryTextStyle: React.CSSProperties = {
  marginBottom: 10,
  color: "#555",
  fontSize: 15,
};

const summaryInfoStyle: React.CSSProperties = {
  marginTop: 18,
  fontSize: 13,
  color: "#888",
};

// 반응형 스타일
const responsiveStyle = `
@media (max-width: 600px) {
  .order-form-container {
    flex-direction: column;
    gap: 20px;
    padding: 0 4px;
  }
  .order-form-card, .order-form-summary {
    min-width: 0;
    padding: 14px;
  }
  .order-form-title {
    font-size: 19px;
    margin-bottom: 14px;
  }
}
`;

const OrderFormPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`이름: ${name}\n전화번호: ${phone}\n주소: ${address} ${addressDetail}\n우편번호: ${zip}`);
  };

  return (
    <>
      <style>{responsiveStyle}</style>
      <div className="order-form-container" style={containerStyle}>
        {/* 좌측: 입력 폼 */}
        <div className="order-form-card" style={cardStyle}>
          <h2 className="order-form-title" style={titleStyle}>
            배송 정보 입력
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={fieldGap}>
              <label style={labelStyle}>
                이름 <span style={{ color: "#e53935" }}>*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력하세요"
                required
                style={inputStyle}
              />
            </div>
            <div style={fieldGap}>
              <label style={labelStyle}>
                전화번호 <span style={{ color: "#e53935" }}>*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="전화번호를 입력하세요"
                required
                style={inputStyle}
              />
            </div>
            <div style={fieldGap}>
              <label style={labelStyle}>
                우편번호 <span style={{ color: "#e53935" }}>*</span>
              </label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="우편번호"
                required
                style={inputStyle}
              />
            </div>
            <div style={fieldGap}>
              <label style={labelStyle}>
                주소 <span style={{ color: "#e53935" }}>*</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="주소를 입력하세요"
                required
                style={inputStyle}
              />
            </div>
            <div style={fieldGap}>
              <label style={labelStyle}>
                상세 주소 <span style={{ color: "#888", fontWeight: 400 }}>(선택)</span>
              </label>
              <input
                type="text"
                value={addressDetail}
                onChange={(e) => setAddressDetail(e.target.value)}
                placeholder="상세 주소를 입력하세요"
                style={inputStyle}
              />
            </div>

            <button type="submit" style={buttonStyle}>
              주문 완료
            </button>
          </form>
        </div>
        {/* 우측: 주문 요약 */}
        <div className="order-form-summary" style={summaryCardStyle}>
          <h3 style={summaryTitleStyle}>주문 요약</h3>
          <div style={summaryTextStyle}>
            상품 ID: <b>{productId || "-"}</b>
          </div>
          <div style={summaryInfoStyle}>결제 및 배송 정보는 입력하신 연락처로 안내됩니다.</div>
        </div>
      </div>
    </>
  );
};

export default OrderFormPage;
