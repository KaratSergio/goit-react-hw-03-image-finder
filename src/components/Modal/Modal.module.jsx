import styled from '@emotion/styled';

export const CustomOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CustomModalContent = styled.div`
  overflow: hidden;
  border: 3px double #000000;
  border-radius: 12px;
`;
