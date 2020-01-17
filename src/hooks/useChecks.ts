import { useState, useEffect } from 'react';

import { Check } from '../types';
import { request } from '../utils/fetch';

const getChecks = () => request<Check[]>('/checks');

export const useChecks = (): [Check[], boolean] => {
  const [checks, setChecks] = useState<Check[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getChecks().then(checks => {
      setChecks(checks.filter(c => c.published));

      setLoading(false);
    });
  }, []);

  return [checks, loading];
};
