import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const ImageWidth = Dimensions.get("screen").width;
const ImageHeight = Dimensions.get("screen").height;

export const LazyLoadImage = () => {
  const opacity = useSharedValue(0);

  const imageFadeInStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  function onImageLoad() {
    opacity.value = withTiming(1, { duration: 200 });
  }

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

const Styles = StyleSheet.create({
  Image: {
    position: "absolute",
    width: ImageWidth,
    height: ImageHeight,
  },
  Container: {
    width: ImageWidth,
    height: ImageHeight,
  },
});
