import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text as RNText, TextProps } from "react-native";
import { getFontSize } from "./Helper";
import type { TextVariants } from "./Model";

type Props = {
  variant?: TextVariants;
} & TextProps;

export const Text = ({ children, variant = "body", ...rest }: Props) => {
  const theme = useTheme();

  const Styles = StyleSheet.create({
    Text: {
      color: theme.colors.text,
      fontSize: getFontSize(variant),
    },
  });

  return (
    <RNText style={[Styles.Text, rest.style]} {...rest}>
      {children}
    </RNText>
  );
};
