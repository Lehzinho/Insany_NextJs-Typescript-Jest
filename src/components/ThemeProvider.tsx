import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { DefaultTheme } from "../styles/theme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledThemeProvider theme={DefaultTheme}>{children}</StyledThemeProvider>
  );
}
