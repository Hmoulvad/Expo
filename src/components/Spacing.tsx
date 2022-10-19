import React from "react";
import { StyleSheet, View } from "react-native";
import { AppSpacing } from "../constants/tokens";

type Props = {
  vertical?: boolean;
};

export const Spacing = ({ vertical = false }: Props) => {
  return <View style={[vertical ? Styles.Vertical : Styles.Horizontal]} />;
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
