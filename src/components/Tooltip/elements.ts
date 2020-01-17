import styled from 'styled-components';

export const Circle = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  top: 2px;
  background: ${({ theme }) => theme.green};
  margin-right: 0.25rem;
`;

export const Container = styled.div`
  transition: all 200ms ease;
  transition-delay: 0.1s;
  position: absolute;
  background: ${({ theme }) => theme.white};
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25),
    0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  opacity: 0;
  color: ${({ theme }) => theme.black};
  transform: translateY(100%) translateX(-50%);
  bottom: -10px;
  min-width: 120px;
  margin-left: 0.25rem;

  :after {
    bottom: 100%;
    left: 50%;
    border: 0.5rem solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: ${({ theme }) => theme.white};
    margin-left: -0.5rem;
  }
`;

export const Info = styled.span<{ bold?: boolean }>`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.black};
  display: block;
  font-weight: ${({ bold }) => (bold ? 500 : 400)};

  &:last-of-type {
    margin-top: 0.25rem;
  }
`;
