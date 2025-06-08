import styled from "@emotion/styled";
const Spacing = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
`;

export default Spacing;
