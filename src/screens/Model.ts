/* ScreenKeys */
export enum AppScreens {
  Home = "HomeScreen",
  LazyLoadImage = "LazyLoadImageScreen",
  AnimatedHeader = "AnimatedHeaderScreen",
}

/* RootStack Type */
export type RootStackParamsList = {
  [AppScreens.Home];
  [AppScreens.LazyLoadImage];
  [AppScreens.AnimatedHeader];
};
