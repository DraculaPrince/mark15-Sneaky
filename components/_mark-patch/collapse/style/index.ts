import { unit } from '@ant-design/cssinjs';

import { resetComponent, resetIcon } from '../../../style';
import type { GenerateStyle, FullToken } from '../../../theme/internal';
import { collapseHeaderBgColor } from '../../cssAtomPatch';

type CollapseToken = FullToken<'Collapse'> & {
  collapseHeaderPaddingSM: string;
  collapseHeaderPaddingLG: string;
  collapsePanelBorderRadius: number;
};

const genBaseStylePatch: GenerateStyle<CollapseToken> = (token) => {
  const {
    componentCls,
    contentBg,
    padding,
    headerBg,
    headerPadding,
    collapseHeaderPaddingSM,
    collapseHeaderPaddingLG,
    collapsePanelBorderRadius,

    lineWidth,
    lineType,
    colorBorder,
    colorText,
    colorTextHeading,
    colorTextDisabled,
    fontSizeLG,
    lineHeight,
    lineHeightLG,
    marginSM,
    paddingSM,
    paddingLG,
    paddingXS,
    motionDurationSlow,
    fontSizeIcon,
    contentPadding,
    fontHeight,
    fontHeightLG,
  } = token;

  const borderBase = `${unit(lineWidth)} ${lineType} ${colorBorder}`;

  return {
    [componentCls]: {
      ...resetComponent(token),
      backgroundColor: collapseHeaderBgColor || headerBg,
      border: borderBase,
      borderBottom: 0,
      borderRadius: collapsePanelBorderRadius,

      [`&-rtl`]: {
        direction: 'rtl',
      },

      [`& > ${componentCls}-item`]: {
        borderBottom: borderBase,
        [`&:last-child`]: {
          [`
            &,
            & > ${componentCls}-header`]: {
            borderRadius: `0 0 ${unit(collapsePanelBorderRadius)} ${unit(
              collapsePanelBorderRadius,
            )}`,
          },
        },

        [`> ${componentCls}-header`]: {
          position: 'relative', // Compatible with old version of antd, should remove in next version
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          padding: headerPadding,
          color: colorTextHeading,
          lineHeight,
          cursor: 'pointer',
          transition: `all ${motionDurationSlow}, visibility 0s`,

          [`> ${componentCls}-header-text`]: {
            flex: 'auto',
          },

          '&:focus': {
            outline: 'none',
          },

          // >>>>> Arrow
          [`${componentCls}-expand-icon`]: {
            height: fontHeight,
            display: 'flex',
            alignItems: 'center',
            paddingInlineEnd: marginSM,
          },

          [`${componentCls}-arrow`]: {
            ...resetIcon(),
            fontSize: fontSizeIcon,

            svg: {
              transition: `transform ${motionDurationSlow}`,
            },
          },

          // >>>>> Text
          [`${componentCls}-header-text`]: {
            marginInlineEnd: 'auto',
          },
        },

        [`${componentCls}-icon-collapsible-only`]: {
          cursor: 'unset',

          [`${componentCls}-expand-icon`]: {
            cursor: 'pointer',
          },
        },
      },

      [`${componentCls}-content`]: {
        color: colorText,
        backgroundColor: contentBg,
        borderTop: borderBase,

        [`& > ${componentCls}-content-box`]: {
          padding: contentPadding,
        },

        [`&-hidden`]: {
          display: 'none',
        },
      },

      [`&-small`]: {
        [`> ${componentCls}-item`]: {
          [`> ${componentCls}-header`]: {
            padding: collapseHeaderPaddingSM,
            paddingInlineStart: paddingXS,

            [`> ${componentCls}-expand-icon`]: {
              // Arrow offset
              marginInlineStart: token.calc(paddingSM).sub(paddingXS).equal(),
            },
          },
          [`> ${componentCls}-content > ${componentCls}-content-box`]: {
            padding: paddingSM,
          },
        },
      },

      [`&-large`]: {
        [`> ${componentCls}-item`]: {
          fontSize: fontSizeLG,
          lineHeight: lineHeightLG,
          [`> ${componentCls}-header`]: {
            padding: collapseHeaderPaddingLG,
            paddingInlineStart: padding,

            [`> ${componentCls}-expand-icon`]: {
              height: fontHeightLG,
              // Arrow offset
              marginInlineStart: token.calc(paddingLG).sub(padding).equal(),
            },
          },
          [`> ${componentCls}-content > ${componentCls}-content-box`]: {
            padding: paddingLG,
          },
        },
      },

      [`${componentCls}-item:last-child`]: {
        [`> ${componentCls}-content`]: {
          borderRadius: `0 0 ${unit(collapsePanelBorderRadius)} ${unit(collapsePanelBorderRadius)}`,
        },
      },

      [`& ${componentCls}-item-disabled > ${componentCls}-header`]: {
        [`
          &,
          & > .arrow
        `]: {
          color: colorTextDisabled,
          cursor: 'not-allowed',
        },
      },

      // ========================== Icon Position ==========================
      [`&${componentCls}-icon-position-end`]: {
        [`& > ${componentCls}-item`]: {
          [`> ${componentCls}-header`]: {
            [`${componentCls}-expand-icon`]: {
              order: 1,
              paddingInlineEnd: 0,
              paddingInlineStart: marginSM,
            },
          },
        },
      },
    },
  };
};

export default genBaseStylePatch;
