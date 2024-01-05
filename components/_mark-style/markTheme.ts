import type { ThemeConfig } from '../config-provider/context';

export default {
  components: {
    Button: {
      colorError: '#EE5050',
      borderRadius: 2,
      borderColorDisabled: '#C3C7CC',
      defaultBorderColor: '#86909C',
      defaultGhostColor: '#4E5969',
      colorBgContainerDisabled: '#F2F3F5',
      colorTextDisabled: '#C3C7CC',
      textHoverBg: '#FFFFFF',
      paddingInline: 16,
      paddingInlineSM: 8,
      colorText: '#3270FF',
      defaultColor: '#4E5969',
    },
    Tabs: {
      horizontalItemPadding: '20px 0 16px 0',
      horizontalItemGutter: 40,
      inkBarColor: '#3270FF',
    },
    Input: {
      paddingInline: 12,
      colorText: '#1D2129',
    },
    Form: {
      colorText: '#1D2129',
    },
    Select: {
      colorText: '#1D2129',
      optionSelectedColor: '#3270FF',
    },
    DatePicker: {
      paddingInline: 12,
      colorTextHeading: '#4E5969',
      colorText: '#4E5969',
      colorTextDisabled: '#C3C7CC',
      cellHoverBg: '#F9F9F9',
      cellHoverWithRangeBg: '#F9F9F9',
      padding: 18,
    },
    Transfer: {
      itemPaddingBlock: 8,
      algorithm: true,
      paddingSM: 16,
      marginXXS: 8,
      marginXS: 12,
    },
    Avatar: {
      textFontSize: 14,
      textFontSizeSM: 12,
    },
    Pagination: {
      itemActiveBg: 'rgb(50, 112, 255)',
      wireframe: true,
      colorBorder: 'rgb(220, 222, 226)',
      colorBgTextActive: 'rgba(255, 255, 255, 0.15)',
    },
    Checkbox: {
      colorTextDisabled: 'rgb(78, 89, 105)',
      colorBgContainerDisabled: 'rgb(242, 243, 245)',
    },
    Descriptions: {
      titleColor: 'rgb(29, 33, 41)',
      colorText: 'rgb(29, 33, 41)',
      colorTextSecondary: 'rgb(134, 144, 156)',
    },
  },
  token: {
    colorPrimary: '#3270ff',
    colorInfo: '#3270ff',
    colorError: '#ee5050',
    colorWarning: '#ffab0f',
    colorSuccess: '#41b75f',
    borderRadius: 2,
    colorPrimaryTextHover: '#457dfe',
    colorPrimaryTextActive: '#2859cc',
    colorLinkHover: '#457dfe',
    colorLinkActive: '#2859cc',
    colorTextBase: '#1d2129',
    colorText: '#4E5969',
    colorPrimaryHover: '#457dfe',
    colorPrimaryActive: '#2859cc',
  },
} as ThemeConfig;
