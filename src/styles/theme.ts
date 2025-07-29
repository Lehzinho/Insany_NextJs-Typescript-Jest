export const DefaultTheme = {
  colors: {
    background: "#F3F7FF",
    white: "#FFFFFF",
    "logo-color": "#5D5D6D",
    "textos-apoio": "#737380",
    excluir: "#DE3838",
  },
  fonts: {
    logo: "700 2.5rem/1.5 Inter",
    shopingCart: "500 0.625rem/2.6 Saira",
  },
  breakpoints: {
    mobile: "48rem",
    tablet: "64rem",
    desktop: "75rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
};

export type Theme = typeof DefaultTheme;
