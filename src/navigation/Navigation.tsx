import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  AnimatedHeader,
  Routes,
  Home,
  LazyLoadImage,
  AnimatedHero,
} from "../routes";
import { DefaultTheme } from "../themes/Default";

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <NavigationContainer theme={DefaultTheme}>
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.LazyLoadImage} component={LazyLoadImage} />
      <Stack.Screen name={Routes.AnimatedHeader} component={AnimatedHeader} />
      <Stack.Screen name={Routes.AnimatedHero} component={AnimatedHero} />
    </Stack.Navigator>
  </NavigationContainer>
);
