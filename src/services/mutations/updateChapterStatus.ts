import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';

import api from '../api';
import { getUnreadCommicsCacheKey } from '../queries/getUnreadCommics';

export type UpdateChapterStatusInput = {
  id: string;
  chapter?: number;
};

export const updateChapterStatusCacheKey = (id: string): string =>
  `/commics/${id}/update`;

export const updateChapterStatus = async ({
  chapter,
  id,
}: UpdateChapterStatusInput): Promise<void> => {
  const payload = {
    id,
    chapter,
  };

  return api.patch(updateChapterStatusCacheKey(id), payload);
};

export const useUpdateChapterStatus = (
  config?: Partial<UseMutationOptions>,
) => {
  return useMutation(updateChapterStatus, {
    ...(config as any),
  });
};
