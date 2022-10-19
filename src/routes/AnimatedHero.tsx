import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Section } from "../components/Section";

export const AnimatedHero = () => {
  const y = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler(() => {});
  return (
    <>
      <Section
        title="Animated Hero"
        subtitle="This is the Screen that demonstrates animation of a hero image."
      />
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
      ></Animated.ScrollView>
    </>
  );
};
