export interface Colors {
  black: string;
  borderColor: string;
  danger: string;
  dangerSecondary: string;
  darkFontColor: string;
  success: string;
  placeholderLightFontColor: string;
  placeholderDarkFontColor: string;
  primary: string;
  primaryBackground: string;
  primaryGrey: string;
  secondary: string;
  secondaryBackground: string;
  lightFontColor: string;
  white: string;
}

export interface GlobalTheme {

  // ---- Animation Time ---- //
  animationTimeVeryFast: number;
  animationTimeFast: number;
  animationTimeMedium: number;
  animationTimeSlow: number;

  // ---- Button ---- //
  buttonBorderRadius: string;
  buttonPadding: string;
  buttonFontWeight: string;
  buttonSmallHeight: string;
  buttonSmallFontSize: string;
  buttonDefaultHeight: string;
  buttonDefaultFontSize: string;
  buttonLargeHeight: string;
  buttonLargeFontSize: string;

  // ---- Primary Button ---- //
  buttonPrimaryBackground: string;
  buttonPrimaryBorder: string;
  buttonPrimaryBorderColor: string;
  buttonPrimaryColor: string;
  buttonPrimaryHoverBackground: string;
  buttonPrimaryHoverColor: string;
  buttonPrimaryActiveBackground: string;
  buttonPrimaryActiveColor: string;

  // ---- Danger Button ---- //
  buttonDangerBackground: string;
  buttonDangerBorder: string;
  buttonDangerBorderColor: string;
  buttonDangerColor: string;
  buttonDangerHoverBackground: string;
  buttonDangerHoverColor: string;
  buttonDangerActiveBackground: string;
  buttonDangerActiveColor: string;

  // ---- Ghost Button ---- //
  buttonGhostBackground: string;
  buttonGhostBorder: string;

  // ----- Link Button ---- //
  buttonLinkBackground: string;
  buttonLinkBorder: string;
  buttonLinkBorderColor: string;
  buttonLinkColor: string;
  buttonLinkHoverBackground: string;
  buttonLinkHoverColor: string;
  buttonLinkActiveBackground: string;
  buttonLinkActiveColor: string;

  // ---- Collapse ---- //
  collapseBorder: string;
  collapseBorderColor: string;
  collapseBorderRadius: string;
  collapseBoxShadow: string;
  collapseContentPadding: string;
  collapseContentBackground: string;
  collapseHeaderColor: string;
  collapseHeaderBackground: string;
  collapseHeaderHoverBackground: string;
  collapseHeaderHoverColor: string;
  collapseHeaderOpenBackground: string;
  collapseHeaderOpenColor: string;
  collapseHeaderPadding: string;
  collapseHeaderHeight: string;
  collapseIconSize: string;


  // ---- Panel ---- //
  panelBackground: string;
  panelBorder: string;
  panelBorderColor: string;
  panelBorderRadius: string;
  panelPadding: string;
  panelMargin: string;
  panelActiveBoxShadow: string;
  panelHoverBoxShadow: string;


  // ---- Input ---- //
  inputBackground: string;
  inputBorder: string;
  inputBorderRadius: string;
  inputBorderColor: string;
  inputFocusBorderColor: string;
  inputColor: string;
  inputDefaultHeight: string;
  inputDefaultFontSize: number;
  inputStatusMessageHeight: string;
  inputStatusFontSize: string;
  inputStatusColor: string;
  inputStatusErrorColor: string;
  inputStatusErrorBorderColor: string;
  inputStatusSuccessColor: string;
  inputStatusSuccessBorderColor: string;
  inputStatusLoadingColor: string;
  inputStatusLoadingBorderColor: string;
  inputLabelFontSize: string;
  inputSmallHeight: string;
  inputSmallFontSize: number;
  inputLargeHeight: string;
  inputLargeFontSize: number;
  inputPadding: string;
  inputPlaceholderColor: string;
  inputPrefixLeft: string;
  inputSuffixRight: string;

  // ---- Media Screen ---- //
  mediaScreenSmall: string;
  mediaScreenMedium: string;
  mediaScreenLarge: string;
  mediaScreenVeryLarge: string;

  // ---- Modal ---- //
  modalBackground: string;
  modalBorder: string;
  modalBorderColor: string;
  modalBorderRadius: string;
  modalBoxShadow: string;
  modalContentPadding: string;
  modalFooterBackground: string;
  modalFooterHeight: string;
  modalFooterPadding: string;
  modalHeaderBackground: string;
  modalHeaderColor: string;
  modalHeaderMarginTop: string;
  modalHeaderPadding: string;
  modalMaskBackground: string;
  modalMinHeight: string;
  modalMinWidth: string;


  colors: Colors;
}
