import type { Theme } from "@react-navigation/native";
import { Color1, Color2, Color4, Color5, Color6 } from "../constants/Tokens";

export const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: Color6,
    background: Color1,
    card: Color2,
    text: Color6,
    border: Color5,
    notification: Color4,
  },
};
