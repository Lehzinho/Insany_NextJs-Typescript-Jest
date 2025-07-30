export const DefaultTheme = {
  colors: {
    background: "#F3F7FF",
    white: "#FFFFFF",
    black: "#000000",
    yellow: "#FFE100",
    green: "#1B9847",
    "88gray": "#E9E9F0",
    "logo-color": "#5D5D6D",
    "textos-apoio": "#737380",
    "border-color": "#E0E0E0",
    "Inputs-Icons": "#41414D",
    "gray-textos": "#617480",
    purple: "#A212DF",
    excluir: "#DE3838",
  },
  fonts: {
    logo: "700 2.5rem/1.5 'Inter', sans-serif",

    price: "700 1.5rem/1.5 'Inter', sans-serif",
    price600: "600 1.25rem/1.5 'Inter', sans-serif",

    button: "500 1rem/1.5 'Inter', sans-serif",
    buttonRegular: "400 1rem/1.5 'Inter', sans-serif",
    categoryh3: "700 1rem/1.5 'Inter', sans-serif",

    h3: "700 0.875rem/1.5 'Inter', sans-serif",
    h2: "300 2rem/1.5 'Inter', sans-serif",
    regular: "400 0.875rem/1.5 'Inter', sans-serif",
    "Inter/12/400": "400 12px/1.5 'Inter', sans-serif",
    shopingCart: "500 0.625rem/2.6 'Saira', sans-serif",
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
} as const;

export type Theme = typeof DefaultTheme;
