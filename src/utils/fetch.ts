const baseURL = 'https://updown.io/api';

export const request = async <T>(path: string) => {
  const url = baseURL + path;
  const resp = await fetch(url, {
    headers: {
      'X-API-KEY': process.env.REACT_APP_UPDOWN_API_KEY || '',
    },
  });
  return (await resp.json()) as T;
};
