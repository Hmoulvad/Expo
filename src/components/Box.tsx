import React, { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { AppSpacing } from "../constants/Tokens";

type Props = {
  children: ReactNode;
  flexRow?: boolean;
} & ViewProps;

export const Box = ({ children, flexRow, ...rest }: Props) => (
  <View
    style={[Styles.Container, { flexDirection: flexRow ? "row" : "column" }]}
    {...rest}
  >
    {children}
  </View>
);

const Styles = StyleSheet.create({
  Container: {
    padding: AppSpacing[4],
  },
});
