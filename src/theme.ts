export const theme = {
  colors: {
    primary: {
      main: "#2E7D32",
      dark: "#1B5E20",
      light: "#4CAF50",
      lightest: "#E8F5E9",
    },
    secondary: {
      main: "#66BB6A",
      dark: "#43A047",
      light: "#81C784",
      lightest: "#F1F8E9",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    text: {
      primary: "#1C2023",
      secondary: "#4A5056",
      tertiary: "#6E7378",
      disabled: "#9EA1A4",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
      grey: "#F5F5F5",
    },
    border: "#E0E0E0",
    error: "#D32F2F",
    warning: "#ED6C02",
    info: "#0288D1",
    success: "#2E7D32",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "20px",
  },
  shadows: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1200px",
  },
} as const;

export type Theme = typeof theme;
