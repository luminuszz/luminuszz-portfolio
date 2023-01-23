import axios from 'axios';

export type WithMutation<Args = unknown, Response = void> = (
  url: string,
  config: { arg: Args },
) => Promise<Response>;

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export default api;
