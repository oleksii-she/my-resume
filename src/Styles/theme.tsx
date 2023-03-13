import { createTheme } from "styled-breakpoints";

interface ThemeInterface {
  space: number[];
  fontSizes: number[];
  fontWeights: number[];
  fonts: string[];
  btnAnimationTransition: string;
  btnHoverFocusScale: string;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    bg: string;
    font: string;
    active: string;
    link: string;
  };
}

const themeStyles: ThemeInterface = {
  space: [0, 4, 8, 16, 32, 64],
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 32, 36, 42, 48],
  fontWeights: [400, 500, 700],
  fonts: ["sans-serif", "Poppins"],
  btnAnimationTransition: "all 0.3s ease",
  btnHoverFocusScale: "1.05",
  colors: {
    primary: "#2AA5BE",
    secondary: "#2b2b2b",
    success: "#4caf50",
    danger: "#f44336 ",
    link: "#828282",
    bg: "#FFFFFF",
    font: "#192C2F",
    active: "#070707",
  },
};

const themeBreakpoints = createTheme({
  mobile: "320px",
  mobileSizeM: "575px",
  tablet: "767px",
  tabletM: "820px",
  pcSizeS: "912px",
  pcSizeM: "1024px",
  pcSizeL: "1200px",
  pc: "1280px",
});

export const theme = { ...themeStyles, ...themeBreakpoints };
