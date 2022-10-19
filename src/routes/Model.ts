/* ScreenKeys */
export enum Routes {
  Home = "Home",
  LazyLoadImage = "LazyLoad",
  AnimatedHeader = "AnimatedHeader",
}

/* RootStack Type */
export type RootStackParamsList = {
  [Routes.Home];
  [Routes.LazyLoadImage];
  [Routes.AnimatedHeader];
};
