import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  position: relative;
  overflow: hidden;
  max-width: 400px;
  border: 1px solid #7fe0cd;
  border-radius: 8px;
  padding: 5px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 1px 1px 5px #2b647e;

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: zoom-in;
  }
`;
