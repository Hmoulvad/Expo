import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Screen } from "../constants/Tokens";

type Props = {
  width?: number;
  height?: number;
};

export const LazyLoadImage = ({
  height = Screen.height,
  width = Screen.width,
}: Props) => {
  const opacity = useSharedValue(0);

  const imageFadeInStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  function onImageLoad() {
    opacity.value = withTiming(1, { duration: 200 });
  }

  const Styles = StyleSheet.create({
    Image: {
      position: "absolute",
      width: width,
      height: height,
    },
    Container: {
      width: width,
      height: height,
    },
  });

  return (
    <View style={Styles.Container}>
      <Animated.Image
        style={[Styles.Image]}
        resizeMode="cover"
        source={{
          uri: "https://i.imgur.com/jWbrBhP.jpg",
        }}
      />
      <Animated.Image
        style={[Styles.Image, imageFadeInStyle]}
        resizeMode="cover"
        onLoadEnd={onImageLoad}
        source={{
          uri: "https://www.pixelstalk.net/wp-content/uploads/2016/06/High-Res-Backgrounds-Free-Download.jpg",
        }}
      />
    </View>
  );
};
