import React, { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { AppSpacing } from "../constants/Tokens";

type Props = {
  children: ReactNode;
  flexRow?: boolean;
  withPadding?: boolean;
} & ViewProps;

export const Box = ({ children, flexRow, withPadding, ...rest }: Props) => {
  const Styles = StyleSheet.create({
    Container: {
      padding: withPadding ? AppSpacing[4] : 0,
    },
  });

  return (
    <View
      style={[Styles.Container, { flexDirection: flexRow ? "row" : "column" }]}
      {...rest}
    >
      {children}
    </View>
  );
};
