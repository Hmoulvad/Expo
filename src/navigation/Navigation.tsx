import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  AnimatedHeaderScreen,
  AppScreens,
  HomeScreen,
  LazyLoadImageScreen,
} from "../screens";
import { DefaultTheme } from "../themes/Default";

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <NavigationContainer theme={DefaultTheme}>
    <Stack.Navigator initialRouteName={AppScreens.Home}>
      <Stack.Screen name={AppScreens.Home} component={HomeScreen} />
      <Stack.Screen
        name={AppScreens.LazyLoadImage}
        component={LazyLoadImageScreen}
      />
      <Stack.Screen
        name={AppScreens.AnimatedHeader}
        component={AnimatedHeaderScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
