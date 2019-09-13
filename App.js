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
import CameraScreen from "./scenes/create/CameraScreen";
import CardScreen from "./scenes/create/CardScreen";


const stack = createStackNavigator({
  Main:{
    screen:MainScreen,
  },
  Create:{
    screen:CreateScreen,
  },
  Camera:{
    screen:CameraScreen
  },
  Card:{
    screen:CardScreen
  }
},{
  headerMode:"none",
})

const navigation = createAppContainer(stack)
export default navigation;
