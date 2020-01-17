import styled from 'styled-components';

export const HeaderStyled = styled.header`
  margin: 3rem 0 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  color: ${({ theme }) => theme.white};
`;
