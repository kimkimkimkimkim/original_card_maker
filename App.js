import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  createAppContainer,
} from "react-navigation"
import {
  createStackNavigator,
} from "react-navigation-stack"

//screen
import MainScreen from "./scenes/main/MainScreen";
import CreateScreen from "./scenes/create/CreateScreen";

const stack = createStackNavigator({
  Main:{
    screen:MainScreen,
  },
  Create:{
    screen:CreateScreen,
  }
},{
  headerMode:"none",
})

const navigation = createAppContainer(stack)
export default navigation;
