import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Box } from "../components/Box";
import { Spacing } from "../components/Spacing/Spacing";
import { Text } from "../components/Text/Text";
import { Color2 } from "../constants/Tokens";

export const AnimatedHeader = () => {
  const headerHeight = useSharedValue(0);

  const headerStyle = useAnimatedStyle(() => ({
    height: headerHeight.value,
  }));

  const onScroll = useAnimatedScrollHandler((e) => {
    if (e.contentOffset.y > 100) {
      headerHeight.value = withTiming(0);
    }
    if (e.contentOffset.y < 100) {
      headerHeight.value = withTiming(100);
    }
  });

  return (
    <>
      <Box>
        <Text variant="display2">This is a header</Text>
        <Animated.View
          style={[headerStyle, { backgroundColor: Color2 }]}
        ></Animated.View>
      </Box>

      <Animated.ScrollView onScroll={onScroll} scrollEventThrottle={16}>
        <Text variant="display1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsa
          molestiae nulla, saepe est incidunt quasi aspernatur excepturi non
          ducimus voluptatibus porro cum animi adipisci praesentium ex numquam
          debitis a?
        </Text>
        <Spacing />
        <Text variant="display1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsa
          molestiae nulla, saepe est incidunt quasi aspernatur excepturi non
          ducimus voluptatibus porro cum animi adipisci praesentium ex numquam
          debitis a?
        </Text>
        <Spacing />
        <Text variant="display1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsa
          molestiae nulla, saepe est incidunt quasi aspernatur excepturi non
          ducimus voluptatibus porro cum animi adipisci praesentium ex numquam
          debitis a?
        </Text>
        <Spacing />
      </Animated.ScrollView>
    </>
  );
};
