import styled from '@emotion/styled';

export const Gallery = styled.ul`
display: grid;
width: 1440px;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 16px;
margin-left: auto;
margin-right: auto;
`;
