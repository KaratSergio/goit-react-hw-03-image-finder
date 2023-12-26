import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  position: relative;
  overflow: hidden;
  max-width: 400px;
  padding: 5px;
  transition: box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 1px 14px #19282f;
    border: 1px solid #f9f9f9;
  }
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;

  :hover {
    cursor: zoom-in;
  }
`;
