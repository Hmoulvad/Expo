import { useTheme } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { StyleSheet, Text as RNText } from "react-native";

type Props = {
  children: ReactNode;
};

export const Text = ({ children }: Props) => {
  const theme = useTheme();

  const Styles = StyleSheet.create({
    Text: {
      color: theme.colors.text,
    },
  });

  return <RNText style={[Styles.Text]}>{children}</RNText>;
};
