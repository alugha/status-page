import React, { FunctionComponent } from 'react';
import { format, parseISO } from 'date-fns';

import { DownTime } from '../../types';

import { Circle, Info, Container } from './elements';

type Props = {
  downTime?: DownTime;
};
export const Tooltip: FunctionComponent<Props> = ({ downTime }) => (
  <Container>
    {downTime ? (
      <>
        <Info>{format(parseISO(downTime.started_at), 'EEEE, d MMMM')}</Info>

        <Info bold>Down for {Math.floor(downTime.duration / 60)}m</Info>
      </>
    ) : (
      <Info>
        <Circle />
        100% Online
      </Info>
    )}
  </Container>
);
