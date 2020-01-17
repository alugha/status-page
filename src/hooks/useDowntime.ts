import { useState, useEffect } from 'react';

import { Check, CheckWithDownTimes, DownTime } from '../types';
import { request } from '../utils/fetch';

import { useChecks } from './useChecks';

const flatten = <T>(array: T[]) => ([] as T[]).concat(...array);
const getDownTimes = (token: string) =>
  request<DownTime[]>(`/checks/${token}/downtimes`);

export const useDowntime = (): [CheckWithDownTimes[], Check[], boolean] => {
  const [checks, loading] = useChecks();
  const [checksWithDownTimes, setDownTimes] = useState<CheckWithDownTimes[]>(
    []
  );

  useEffect(() => {
    if (loading) {
      return;
    }

    Promise.all(
      checks.map(check =>
        getDownTimes(check.token).then(downTimes => ({
          ...check,
          downTimes,
        }))
      )
    )
      .then(flatten)
      .then(setDownTimes);
  }, [loading, checks]);

  return [checksWithDownTimes, checks, loading];
};
