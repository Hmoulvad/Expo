import React from "react";
import { Box } from "./Box";
import { Spacing } from "./Spacing/Spacing";
import { Text } from "./Text/Text";

type Props = {
  title: string;
  subtitle?: string;
};

export const Section = ({ title, subtitle }: Props) => {
  return (
    <Box withPadding>
      <Box>
        <Text variant="display3">{title}</Text>
        <Spacing size="1" />
        <Text variant="label">{subtitle}</Text>
      </Box>
    </Box>
  );
};
