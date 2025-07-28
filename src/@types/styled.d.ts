/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";

import { DefaultTheme } from "../styles/theme";

type ThemeType = typeof DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
