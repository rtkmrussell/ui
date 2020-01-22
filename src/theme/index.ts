import {
  colors
} from './colors';

import {
  Colors,
  GlobalTheme
} from "./types";

const VALID_COLOR_HEX = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;

/**
 * Converts a 6-digit hex colour into RGBA and applies the desired alpha
 * @param {string} color - #RRGGBB hex colour code from theme
 * @param {number} alpha - transparency level to apply (e.g. 0.2)
 * @return {string} CSS-consumable string of format "rgba(rrr, ggg, bbb, a.a)"
 */
const withAlpha = (color: string, alpha: number) => {
  const parts = color.match(VALID_COLOR_HEX);
  if (parts) {
    const [, r, g, b] = parts;
    return `rgba(${parseInt(r, 16)},${parseInt(g, 16)},${parseInt(b, 16)},${alpha})`;
  }
  return color;
};

export const getDefaultTheme = (themeColors: Colors = colors): GlobalTheme => ({

  // ---- Animation ---- //
  animationTimeVeryFast: 0.1,
  animationTimeFast: 0.25,
  animationTimeMedium: 0.5,
  animationTimeSlow: 1,

  // ---- Button ---- //
  buttonBorderRadius: '4px',
  buttonPadding: '0px 15px',
  buttonFontWeight: '400',
  buttonSmallHeight: '24px',
  buttonSmallFontSize: '12px',
  buttonDefaultHeight: '32px',
  buttonDefaultFontSize: '14px',
  buttonLargeHeight: '44px',
  buttonLargeFontSize: '16px',

  // ---- Primary Button ---- //
  buttonPrimaryBackground: themeColors.primary,
  buttonPrimaryBorder: 'none',
  buttonPrimaryBorderColor: 'none',
  buttonPrimaryColor: themeColors.lightFontColor,
  buttonPrimaryHoverBackground: themeColors.secondary,
  buttonPrimaryHoverColor: themeColors.white,
  buttonPrimaryActiveBackground: themeColors.secondary,
  buttonPrimaryActiveColor: themeColors.white,

  // ---- Danger Button ---- //
  buttonDangerBackground: themeColors.danger,
  buttonDangerBorder: 'none',
  buttonDangerBorderColor: 'none',
  buttonDangerColor: themeColors.lightFontColor,
  buttonDangerHoverBackground: themeColors.dangerSecondary,
  buttonDangerHoverColor: themeColors.white,
  buttonDangerActiveBackground: themeColors.dangerSecondary,
  buttonDangerActiveColor: themeColors.white,

  // ---- Ghost Button ---- //
  buttonGhostBackground: themeColors.primaryBackground,
  buttonGhostBorder: '1px solid',

  // ----- Link Button ---- //
  buttonLinkBackground: 'transparent',
  buttonLinkBorder: 'none',
  buttonLinkBorderColor: 'none',
  buttonLinkColor: themeColors.primary,
  buttonLinkHoverBackground: 'transparent',
  buttonLinkHoverColor: themeColors.secondary,
  buttonLinkActiveBackground: 'transparent',
  buttonLinkActiveColor: themeColors.secondary,

  // ---- Collapse ---- //
  collapseBorder: '1px solid',
  collapseBorderColor: themeColors.borderColor,
  collapseBorderRadius: '4px',
  collapseBoxShadow: 'none',
  collapseContentPadding: '10px',
  collapseContentBackground: themeColors.primaryBackground,
  collapseHeaderColor: themeColors.primaryGrey,
  collapseHeaderBackground: themeColors.primaryBackground,
  collapseHeaderHoverBackground: themeColors.primary,
  collapseHeaderHoverColor: themeColors.lightFontColor,
  collapseHeaderOpenBackground: themeColors.primary,
  collapseHeaderOpenColor: themeColors.lightFontColor,
  collapseHeaderPadding: '0px 15px',
  collapseHeaderHeight: '32px',
  collapseIconSize: '10px',

  // ---- Panel ---- //
  panelBackground: themeColors.primaryBackground,
  panelBorder: 'none',
  panelBorderColor: 'none',
  panelBorderRadius: '4px',
  panelPadding: '24px',
  panelMargin: '32px',
  panelActiveBoxShadow: `0px 0px 4px ${withAlpha(themeColors.black, 0.20)}`,
  panelHoverBoxShadow: `0px 7px 21px ${withAlpha(themeColors.black, 0.07)}`,


  // ---- Input ---- //
  inputBackground: themeColors.primaryBackground,
  inputBorder: '1px solid',
  inputBorderRadius: '4px',
  inputBorderColor: themeColors.borderColor,
  inputFocusBorderColor: themeColors.primary,
  inputColor: themeColors.darkFontColor,
  inputDefaultHeight: '32px',
  inputDefaultFontSize: 14,
  inputStatusMessageHeight: '15px',
  inputLabelFontSize: '12px',
  inputStatusFontSize: '12px',
  inputStatusColor: themeColors.placeholderDarkFontColor,
  inputStatusErrorColor: themeColors.danger,
  inputStatusErrorBorderColor: themeColors.danger,
  inputStatusSuccessColor: themeColors.success,
  inputStatusSuccessBorderColor: themeColors.success,
  inputStatusLoadingColor: themeColors.placeholderDarkFontColor,
  inputStatusLoadingBorderColor: themeColors.borderColor,
  inputSmallHeight: '24px',
  inputSmallFontSize: 12,
  inputLargeHeight: '44px',
  inputLargeFontSize: 18,
  inputPadding: '0 10px',
  inputPlaceholderColor: themeColors.placeholderDarkFontColor,
  inputPrefixLeft: '10px',
  inputSuffixRight: '10px',

  // ---- Media Screen ---- //
  mediaScreenSmall: '600px',
  mediaScreenMedium: '748px',
  mediaScreenLarge: '992px',
  mediaScreenVeryLarge: '1200px',

  // ---- Modal ---- //
  modalBackground: themeColors.primaryBackground,
  modalBorder: 'none',
  modalBorderColor: 'transparent',
  modalBorderRadius: '4px',
  modalBoxShadow: `0px 4px 12px ${withAlpha(themeColors.black, 0.15)}`,
  modalContentPadding: '32px',
  modalFooterBackground: themeColors.secondaryBackground,
  modalFooterHeight: '60px',
  modalFooterPadding: '0 32px',
  modalHeaderBackground: 'transparent',
  modalHeaderColor: themeColors.primary,
  modalHeaderMarginTop: '24px',
  modalHeaderPadding: '0 32px',
  modalMaskBackground: withAlpha(themeColors.black, 0.45),
  modalMinHeight: '200px',
  modalMinWidth: '520px',

  colors: {
    ...themeColors
  }
});

export const createTheme = (colorOverrides: Partial<Colors>, themeOverrides: Partial<GlobalTheme>): GlobalTheme => {
  const themeColors = {
    ...colors,
    ...colorOverrides
  };

  const theme = getDefaultTheme(themeColors);

  return {
    ...theme,
    ...themeOverrides
  };
};
