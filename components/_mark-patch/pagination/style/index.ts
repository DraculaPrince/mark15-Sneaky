import type { PaginationToken } from '../../pagination';
import type { GenerateStyle } from '../../../theme/interface';

export const borderPaginationPatch: GenerateStyle<PaginationToken> = (token) => {
  return {
    active: {
      backgroundColor: token.colorPrimary,
      a: {
        color: token.itemBg,
      },
    },
  };
};

export const miniPaginationPatch: GenerateStyle<PaginationToken> = (token) => {
  return {
    active: {
      backgroundColor: token.itemBg,
    },
  };
};
