import { useTheme } from "@react-navigation/native";
import React, { ReactNode } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { AppSpacing } from "../../constants/Tokens";
import { Text } from "../Text/Text";

type Props = { children: ReactNode; outline?: boolean } & TouchableOpacityProps;

export const Button = ({ children, outline = false, ...rest }: Props) => {
  const theme = useTheme();

  const Styles = StyleSheet.create({
    Button: {
      paddingVertical: AppSpacing[2],
      height: AppSpacing[10],
      alignContent: "center",
      alignItems: "center",
      borderRadius: AppSpacing[5],
    },
    Basic: {
      backgroundColor: theme.colors.card,
    },
    Outline: {
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
  });

  return (
    <TouchableOpacity
      style={[
        Styles.Button,
        outline ? Styles.Outline : Styles.Basic,
        rest.style,
      ]}
      {...rest}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};
