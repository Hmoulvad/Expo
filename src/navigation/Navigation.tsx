import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  AnimatedHeaderScreen,
  Routes,
  HomeScreen,
  LazyLoadImageScreen,
} from "../routes";
import { DefaultTheme } from "../themes/Default";

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <NavigationContainer theme={DefaultTheme}>
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
      <Stack.Screen
        name={Routes.LazyLoadImage}
        component={LazyLoadImageScreen}
      />
      <Stack.Screen
        name={Routes.AnimatedHeader}
        component={AnimatedHeaderScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
