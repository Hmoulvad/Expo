import { FontSizes } from "../../constants/Tokens";
import type { TextVariants } from "./Model";

export function getFontSize(variant: TextVariants) {
  switch (variant) {
    case "display1":
      return FontSizes[500];
    case "display2":
      return FontSizes[400];
    case "display3":
      return FontSizes[300];
    case "body":
      return FontSizes[200];
    case "label":
      return FontSizes[100];
  }
}
