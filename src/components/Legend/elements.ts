import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 1rem;
  margin-top: 56px;
  border-top: 1px solid #242424;

  li:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Dot = styled.div<{ down?: boolean }>`
  width: 1rem;
  height: 1rem;
  background: ${({ down, theme }) => (down ? theme.yellow : theme.green)};
  border-radius: 50%;
  margin-right: 0.5rem;
`;
