import styled from 'styled-components';

export const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.white};
  margin: 0;
`;

export const LastCheck = styled.span`
  line-height: 1.5rem;
  color: ${({ theme }) => theme.fadedWhite};
`;

export const Circle = styled.div<{ down?: boolean; loading?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  transition: all 1s ease;

  background-color: ${({ down, loading, theme }) =>
    loading ? theme.fadedWhite : down ? theme.yellow : theme.green};
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Percent = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: right;
  color: ${({ theme }) => theme.white};
  margin: 0 0.5rem 0 0;
`;

export const Visual = styled.div`
  display: flex;
  align-items: center;
`;
