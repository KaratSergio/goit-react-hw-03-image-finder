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
  margin: auto;
  width: 1486px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 25px 25px 0 0;
`;

export const SearchForm = styled.form`
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchBtn = styled.button`
  width: 120px;
  height: 46px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  border-radius: 12px;
  background-color: #3f51b5;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;

export const SearchInput = styled.input`
  margin: 12px;
  width: 226px;
  height: 40px;
  border-radius: 12px;
  background: #c6d7de11;
`;
