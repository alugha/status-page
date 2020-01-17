import styled from 'styled-components';

export const Main = styled.main`
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 50px 0px;
  border-radius: 0.5rem;
  width: 890px;
  max-width: 100%;
  padding: 2.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Footer = styled.span`
  margin: 1.5rem 0;
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.fadedWhite};
`;
