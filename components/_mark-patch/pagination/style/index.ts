// import type { PaginationToken } from '.';

export const borderPaginationPatch: any = (token: any) => ({
  active: {
    backgroundColor: token.colorPrimary,
    a: {
      color: token.itemBg,
    },
  },
});

export const miniPaginationPatch: any = (token: any) => ({
  active: {
    backgroundColor: token.itemBg,
  },
});
