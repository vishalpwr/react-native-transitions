/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import React from 'react';
import {
  Easing,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './src/screens/Home';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
}

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}

const customTransition = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            })
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["180deg", "0deg"],
            }),
          },
          {
            scale: next ?
              next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.7],
              }) : 1,
          }
        ]
      },
    }
  }
}

const AppStack = () => {
  return (
    <Stack.Navigator
      // apply for all screen
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    // headerMode="none"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Screen1" component={Screen1}
        options={{
          gestureDirection: 'vertical',
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <Stack.Screen name="Screen2" component={Screen2}
        options={{
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen name="Screen3" component={Screen3}
        options={{
          ...customTransition,
        }}
      />
    </Stack.Navigator>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
