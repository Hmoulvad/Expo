import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { Color2 } from "../constants/Tokens";

export const AnimatedHero = () => {
  const scale = useSharedValue(0);

  function setScale() {
    scale.value = withTiming(Math.random(), {
      duration: 250,
    });
  }

  const ballStyle = useAnimatedStyle(() => ({
    height: 40,
    width: 40,
    backgroundColor: Color2,
    borderRadius: 20,
    transform: [
      {
        scale: interpolate(scale.value, [0, 1], [0, 5]),
      },
    ],
  }));

  return (
    <Box withPadding>
      <Section
        title="Animated Hero"
        subtitle="This is the Screen that demonstrates animation of a hero image."
      />
      <Button onPress={setScale} outline>
        Set Random Scale
      </Button>
      <Animated.View style={[ballStyle]} />
    </Box>
  );
};
