import { useTheme } from "@react-navigation/native";
import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AppSpacing, Color3 } from "../constants/tokens";
import { Text } from "./Text";

type Props = { children: ReactNode; onPress: () => void };

export const Button = ({ children, onPress }: Props) => {
  const theme = useTheme();

  const Styles = StyleSheet.create({
    Button: {
      padding: AppSpacing[2],
      width: "100%",
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
