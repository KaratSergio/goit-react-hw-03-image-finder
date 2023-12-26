import styled from '@emotion/styled';

export const LoadBtn = styled.button`
  padding: 8px 16px;
  margin: auto;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 8px solid #fff;
  border-radius: 8px;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0 0 3px #2b647e;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
