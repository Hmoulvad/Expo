import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { AppSpacing } from "../constants/tokens";

type Props = {
  children: ReactNode;
};

export const Box = ({ children }: Props) => (
  <View style={[Styles.Container]}>{children}</View>
);

const Styles = StyleSheet.create({
  Container: {
    padding: AppSpacing[4],
  },
});
