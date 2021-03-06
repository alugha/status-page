import React, { FunctionComponent } from 'react';

import { Footer, Main, Wrapper } from './elements';

import { DownTimes } from './components/Downtimes';
import { Header } from './components/Header';
import { MainStatus } from './components/MainStatus';
import { useDowntime } from './hooks/useDowntime';

export const App: FunctionComponent = () => {
  const [checksWithDownTimes, checks, loading] = useDowntime();

  return (
    <Wrapper>
      <Header />

      <Main>
        <MainStatus checks={checks} loading={loading} />

        <DownTimes checksWithDownTimes={checksWithDownTimes} />
      </Main>

      <Footer>
        <a href="https://alugha.com/privacy">Privacy Policy</a>
        {' · '}
        <a href="https://alugha.com/disclaimer">Disclaimer</a>
        {' · '}
        <a href="https://alugha.com/tos">Terms of Use</a>
      </Footer>
    </Wrapper>
  );
};
