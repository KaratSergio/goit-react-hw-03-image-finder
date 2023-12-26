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
`;

export const CustomModalContent = styled.div`
  overflow: hidden;
`;
