import type { Theme } from "@react-navigation/native";
import {
  Color1,
  Color2,
  Color3,
  Color4,
  Color5,
  Color6,
} from "../constants/tokens";

export const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: Color2,
    background: Color1,
    card: Color3,
    text: Color6,
    border: Color5,
    notification: Color4,
  },
};
