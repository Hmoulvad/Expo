import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text as RNText, TextProps } from "react-native";

type Props = {} & TextProps;

export const Text = ({ children, ...rest }: Props) => {
  const theme = useTheme();

  const Styles = StyleSheet.create({
    Text: {
      color: theme.colors.text,
    },
  });

  return (
    <RNText style={[Styles.Text, rest.style]} {...rest}>
      {children}
    </RNText>
  );
};
