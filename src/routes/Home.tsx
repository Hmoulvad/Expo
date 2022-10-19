import React from "react";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Spacing } from "../components/Spacing";
import { useNav } from "../lib/useNavigation";
import { Routes } from "./Model";

export const HomeScreen = () => {
  const { navigate } = useNav();
  return (
    <Box>
      <Button onPress={() => navigate(Routes.LazyLoadImage)}>
        LazyLoadImage
      </Button>
      <Spacing />
      <Button onPress={() => navigate(Routes.AnimatedHeader)}>
        Animated Header
      </Button>
    </Box>
  );
};
