import React from "react";
import { Box } from "../components/Box";
import { Button } from "../components/Button/Button";
import { Spacing } from "../components/Spacing/Spacing";
import { useNav } from "../lib/useNavigation";
import { Routes } from "./Model";

export const Home = () => {
  const { navigate } = useNav();
  return (
    <Box withPadding>
      <Button outline onPress={() => navigate(Routes.LazyLoadImage)}>
        LazyLoadImage
      </Button>
      <Spacing />
      <Button outline onPress={() => navigate(Routes.AnimatedHeader)}>
        Animated Header
      </Button>
      <Spacing />
      <Button outline onPress={() => navigate(Routes.AnimatedHero)}>
        Animated Hero
      </Button>
    </Box>
  );
};
