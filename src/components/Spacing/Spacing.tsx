import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { getSpacing } from "./Helper";
import type { SpacingSize } from "./Model";

type Props = {
  vertical?: boolean;
  size?: SpacingSize;
} & ViewProps;

export const Spacing = ({ vertical = false, size = "4", ...rest }: Props) => {
  const Styles = StyleSheet.create({
    Vertical: {
      width: getSpacing(size),
      height: "100%",
    },
    Horizontal: {
      height: getSpacing(size),
      width: "100%",
    },
  });
  return (
    <View style={[vertical ? Styles.Vertical : Styles.Horizontal]} {...rest} />
  );
};
