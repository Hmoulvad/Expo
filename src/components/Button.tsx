import { useTheme } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AppSpacing } from "../constants/tokens";
import { Text } from "./Text";

type Props = { children: ReactNode; onPress?: () => void };

export const Button = ({ children, onPress }: Props) => {
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
    <TouchableOpacity onPress={onPress} style={Styles.Button}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};
