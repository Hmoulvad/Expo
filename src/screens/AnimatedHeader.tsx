import React from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Spacing } from "../components/Spacing";
import { Text } from "../components/Text";

export const AnimatedHeaderScreen = () => {
  const headerFullHeight = useSharedValue(0);
  const headerMinHeight = useSharedValue(0);
  const headerHeight = useSharedValue(0);

  const headerStyling = useAnimatedStyle(() => ({
    height: headerHeight.value,
  }));

  function onScroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    if (
      e.nativeEvent.contentOffset.y < headerFullHeight.value &&
      e.nativeEvent.contentOffset.y > headerFullHeight.value
    ) {
      console.log(
        "HeaderHeight: ",
        headerHeight.value - e.nativeEvent.contentOffset.y
      );
      headerHeight.value = headerHeight.value - e.nativeEvent.contentOffset.y;
    }
  }

  return (
    <>
      <Animated.View
        style={[headerStyling]}
        onLayout={(e) => {
          headerFullHeight.value = e.nativeEvent.layout.height;
          headerHeight.value = e.nativeEvent.layout.height;
        }}
      >
        <Box>
          <Box
            onLayout={(e) => {
              headerMinHeight.value = e.nativeEvent.layout.height;
            }}
          >
            <Text>Header</Text>
          </Box>
          <Box flexRow>
            <Button>Dont show me when scrolling</Button>
            <Spacing vertical />
            <Button>Dont show me when scrolling</Button>
          </Box>
        </Box>
      </Animated.View>
      <Animated.ScrollView scrollEventThrottle={1} onScroll={onScroll}>
        <Box>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            error, accusamus aut suscipit vitae officia repudiandae accusantium
            molestiae hic aspernatur. Ex sapiente maxime nulla provident
            aspernatur accusantium sed, officia praesentium?
          </Text>
          <Spacing />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            error, accusamus aut suscipit vitae officia repudiandae accusantium
            molestiae hic aspernatur. Ex sapiente maxime nulla provident
            aspernatur accusantium sed, officia praesentium?
          </Text>
          <Spacing />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            error, accusamus aut suscipit vitae officia repudiandae accusantium
            molestiae hic aspernatur. Ex sapiente maxime nulla provident
            aspernatur accusantium sed, officia praesentium?
          </Text>
          <Spacing />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            error, accusamus aut suscipit vitae officia repudiandae accusantium
            molestiae hic aspernatur. Ex sapiente maxime nulla provident
            aspernatur accusantium sed, officia praesentium?
          </Text>
          <Spacing />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            error, accusamus aut suscipit vitae officia repudiandae accusantium
            molestiae hic aspernatur. Ex sapiente maxime nulla provident
            aspernatur accusantium sed, officia praesentium?
          </Text>
          <Spacing />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            error, accusamus aut suscipit vitae officia repudiandae accusantium
            molestiae hic aspernatur. Ex sapiente maxime nulla provident
            aspernatur accusantium sed, officia praesentium?
          </Text>
          <Spacing />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            error, accusamus aut suscipit vitae officia repudiandae accusantium
            molestiae hic aspernatur. Ex sapiente maxime nulla provident
            aspernatur accusantium sed, officia praesentium?
          </Text>
        </Box>
        <Spacing />
      </Animated.ScrollView>
    </>
  );
};
