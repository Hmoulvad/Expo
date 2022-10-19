import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

type Props = {
  children: ReactNode;
};

export const ScreenLayout = ({ children }: Props) => {
  return <SafeAreaView style={Styles.Container}>{children}</SafeAreaView>;
};

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
