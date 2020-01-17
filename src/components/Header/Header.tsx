import React, { FunctionComponent } from 'react';
import Logo from '../../assets/Logo';
import { HeaderStyled, Title } from './elements';

export const Header: FunctionComponent = () => (
  <HeaderStyled>
    <Logo />
    <Title>System Status</Title>
  </HeaderStyled>
);
