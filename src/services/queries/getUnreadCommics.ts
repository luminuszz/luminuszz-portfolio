// eslint-disable-next-line import/no-extraneous-dependencies

import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';

import api from '../api';

export type Commic = {
  status: string;
  url: string;
  createdAt: Date;
  cap: number;
  category: string;
  name: string;
  recipientId: string;
  hasNewchapter: boolean;
  id: string;
};

export const getUnreadCommicsCacheKey = '/commics/find-all-unread';

export async function getUnreadCommics(): Promise<Commic[]> {
  const { data } = await api.get<Commic[]>(getUnreadCommicsCacheKey);

  return data;
}

export const useGetUnreadCommics = (config?: Partial<UseQueryOptions>) => {
  return useQuery<Commic[]>(
    getUnreadCommicsCacheKey,
    getUnreadCommics,
    config as any,
  );
};
