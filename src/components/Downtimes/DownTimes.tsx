import React, { FunctionComponent } from 'react';

import { CheckWithDownTimes } from '../../types';

import { Legend } from '../Legend';
import { Tooltip } from '../Tooltip';

import {
  Alias,
  Data,
  Header,
  Service,
  Services,
  Status,
  AllStatus,
} from './elements';
import { lastMonth, empty, placeholders } from './fn';

type Props = {
  checksWithDownTimes: CheckWithDownTimes[];
};
export const DownTimes: FunctionComponent<Props> = ({
  checksWithDownTimes,
}) => {
  if (!checksWithDownTimes.length) {
    return (
      <>
        <Services>
          {placeholders.map(i => (
            <Service key={i}>
              <Header>
                <Alias>Getting data</Alias>
              </Header>

              <AllStatus>
                {empty.map((_, i) => (
                  <Status key={i} loading />
                ))}
              </AllStatus>
            </Service>
          ))}
        </Services>

        <Legend />
      </>
    );
  }

  return (
    <>
      <Services>
        {lastMonth(checksWithDownTimes).map(check => (
          <Service key={check.token}>
            <Header>
              <Alias>
                <a href={`https://updown.io/${check.token}`}>{check.alias}</a>
              </Alias>

              <Data>
                {check.uptime.toFixed(2)}% uptime for the last 30 days
              </Data>
            </Header>

            <AllStatus>
              {empty.map((_, i) => {
                const down = lastMonth(checksWithDownTimes).find(otherCheck =>
                  otherCheck.downTimes.find(
                    downTime =>
                      downTime.from30 === i + 1 &&
                      otherCheck.token === check.token
                  )
                );
                return (
                  <div key={i} style={{ position: 'relative' }}>
                    <Status down={Boolean(down)} />

                    <Tooltip
                      downTime={
                        down &&
                        down.downTimes.find(
                          downTime => downTime.from30 === i + 1
                        )
                      }
                    />
                  </div>
                );
              })}
            </AllStatus>
          </Service>
        ))}
      </Services>

      <Legend />
    </>
  );
};
