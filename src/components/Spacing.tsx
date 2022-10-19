import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { AppSpacing } from "../constants/tokens";

type Props = {
  vertical?: boolean;
} & ViewProps;

export const Spacing = ({ vertical = false, ...rest }: Props) => {
  return (
    <View style={[vertical ? Styles.Vertical : Styles.Horizontal]} {...rest} />
  );
};

const Styles = StyleSheet.create({
  Vertical: {
    width: AppSpacing[4],
    height: "100%",
  },
  Horizontal: {
    height: AppSpacing[4],
    width: "100%",
  },
});
