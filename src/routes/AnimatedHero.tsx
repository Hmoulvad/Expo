import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

export const AnimatedHero = () => {
  const y = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler(() => {});
  return (
    <>
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
      ></Animated.ScrollView>
    </>
  );
};
