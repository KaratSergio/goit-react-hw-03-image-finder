import styled from '@emotion/styled';

export const SearchBox = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
`;

export const SearchBtn = styled.button`
  width: 120px;
  height: 48px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  border-color: #fafafa;
  border-radius:0 12px 12px 0;
  background-color: #3f51b5;
  border: 5px solid;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;

export const SearchInput = styled.input`
  font-size: 26px;
  padding: 0 10px;
  width: 226px;
  height: 48px;
  border: 5px solid;
  border-radius: 12px 0 0 12px;
  border-color: #fafafa;
  background-color: #6c86925d;

  &::placeholder {
    text-align: center;
    font-size: 16px;
    opacity: 0.4; 
  }
`;
