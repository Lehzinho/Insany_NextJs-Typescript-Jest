export const DefaultTheme = {
  colors: {
    background: "#F3F7FF",
    white: "#FFFFFF",
    black: "#000000",
    yellow: "#FFE100",
    green: "#1B9847",
    purple: "#A212DF",
    excluir: "#DE3838",
    "88gray": "#E9E9F0",
    "border-color": "#E0E0E0",
    "box-gray": "#F3F5F6",
    "border-gray": "#A8A8B3",
    "logo-color": "#5D5D6D",
    "textos-apoio": "#737380",
    "Inputs-Icons": "#41414D",
    "gray-textos": "#617480",
  },
  fonts: {
    "Inter/40/700": "700 2.5rem/1.5 'Inter', sans-serif",
    "Inter/32/300": "300 2rem/1.5 'Inter', sans-serif",
    "Inter/24/700": "700 1.5rem/1.5 'Inter', sans-serif",

    "Inter/20/600": "600 1.25rem/1.5 'Inter', sans-serif",
    "Inter/16/500": "500 1rem/1.5 'Inter', sans-serif",
    "Inter/16/700": "700 1rem/1.5 'Inter', sans-serif",

    "Inter/14/700": "700 0.875rem/1.5 'Inter', sans-serif",
    "Inter/14/400": "400 0.875rem/1.5 'Inter', sans-serif",
    "Inter/12/400": "400 0.75rem/1.5 'Inter', sans-serif",
    "Saira/10/500": "500 0.625rem/2.6 'Saira', sans-serif",
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
