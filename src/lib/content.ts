import type { ContentItem } from '@/data/types';

export const getCoverImage = (item: Pick<ContentItem, 'coverImage'>) =>
  Array.isArray(item.coverImage) ? item.coverImage[0] : item.coverImage;
