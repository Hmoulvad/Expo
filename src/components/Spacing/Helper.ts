import { AppSpacing } from "../../constants/Tokens";
import type { SpacingSize } from "./Model";

export function getSpacing(size: SpacingSize) {
  switch (size) {
    case "1":
      return AppSpacing[1];
    case "2":
      return AppSpacing[2];
    case "3":
      return AppSpacing[3];
    case "4":
      return AppSpacing[4];
    case "5":
      return AppSpacing[5];
    case "6":
      return AppSpacing[6];
  }
}
