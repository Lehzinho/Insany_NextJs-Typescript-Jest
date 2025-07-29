export const DefaultTheme = {
  colors: {
    background: "#F3F7FF",
    white: "#FFFFFF",
    black: "#000000",
    yellow: "#FFE100",
    green: "#1B9847",
    "logo-color": "#5D5D6D",
    "textos-apoio": "#737380",
    excluir: "#DE3838",
  },
  fonts: {
    logo: "700 2.5rem/1.5 Inter",
    price: "700 1.5rem/1.5 inter",
    button: "500 1rem/1.5 Inter",
    h3: "700 0.875rem/1.5 Inter",
    regular: "400 0.875rem/1.5 Inter",

    shopingCart: "500 0.625rem/2.6 Saira",
  },
  breakpoints: {
    mobile: "48rem",
    tablet: "64rem",
    desktop: "75rem",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
};

export type Theme = typeof DefaultTheme;
