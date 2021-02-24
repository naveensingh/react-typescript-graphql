import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import React from 'react';

import GlobalStyles from './GlobalStyles';

const palette = {
    primary: '#101112',
    neutral_100: '#FFFFFF',
    neutral_200: '#F8F8F8',
    neutral_300: '#EEEEEE',
    neutral_400: '#E4E4E4',
    neutral_500: '#BBBBBB',
    neutral_700: '#676767',
    neutral_800: '#343434',
    neutral_900: '#000000',
};

const baseSpacing = 8;

const fonts = {
    primary: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Helvetica Neue, sans-serif',
};

const fontSizes = {
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
};

const fontWeights = {
    regular: 400,
    bold: 600,
    bolder: 700,
};

const space = {
    xxs: 0,
    xs: baseSpacing / 2,
    sm: baseSpacing,
    md: baseSpacing * 2,
    lg: baseSpacing * 3,
    xl: baseSpacing * 4,
    xxl: baseSpacing * 5,
};

const borderWidths = {
    sm: '1px',
    md: '2px',
};

const radii = {
    sm: 2,
    md: 4,
    lg: 8,
};

const shadows = {
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    md: '0 2px 4px 0 rgba(0, 0, 0, 0.15)',
    lg: '0 3px 8px 0 rgba(0, 0, 0, 0.15)',
    xl: '0 6px 12px 0 rgba(0, 0, 0, 0.10)',
};

export const theme = {
    colors: {
        ...palette,
        border: palette.neutral_400,
        background: palette.neutral_200,
        white: palette.neutral_100,
        text: palette.neutral_800,
        black: palette.neutral_900,
    },
    fonts,
    fontSizes,
    fontWeights,
    space,
    borderWidths,
    radii,
    shadows,
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
    <StyledComponentThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </StyledComponentThemeProvider>
);

export default ThemeProvider;
