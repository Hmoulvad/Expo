import { useTheme } from "@react-navigation/native";
import React, { ReactNode } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { AppSpacing } from "../constants/Tokens";
import { Text } from "./Text/Text";

type Props = { children: ReactNode } & TouchableOpacityProps;

export const Button = ({ children, ...rest }: Props) => {
  const theme = useTheme();

  const Styles = StyleSheet.create({
    Button: {
      paddingVertical: AppSpacing[2],
      flex: 1,
      minHeight: AppSpacing[10],
      alignContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.card,
      borderRadius: AppSpacing[4],
    },
  });

  return (
    <TouchableOpacity style={[Styles.Button, rest.style]} {...rest}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};
