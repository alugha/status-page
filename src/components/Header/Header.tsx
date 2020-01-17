import React, { FunctionComponent } from 'react';
import Logo from '../../assets/Logo';
import { HeaderStyled, Title } from './elements';

export const Header: FunctionComponent = () => (
  <HeaderStyled>
    <a href="https://alugha.com" title="alugha">
      <Logo />
    </a>
    <Title>System Status</Title>
  </HeaderStyled>
);
