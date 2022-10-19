import React from "react";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Spacing } from "../components/Spacing";
import { useNav } from "../lib/useNavigation";
import { AppScreens } from "./Model";

export const HomeScreen = () => {
  const { navigate } = useNav();
  return (
    <Box>
      <Button onPress={() => navigate(AppScreens.LazyLoadImage)}>
        LazyLoadImage
      </Button>
      <Spacing />
      <Button onPress={() => navigate(AppScreens.AnimatedHeader)}>
        Animated Header
      </Button>
    </Box>
  );
};
