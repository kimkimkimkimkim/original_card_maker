import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
  createAppContainer,
} from "react-navigation"
import {
  createStackNavigator,
} from "react-navigation-stack"

//screen
import EmptyScreen from "./scenes/create/EmptyScreen";
import MainScreen from "./scenes/main/MainScreen";
import CreateScreen from "./scenes/create/CreateScreen";
import CameraScreen from "./scenes/create/CameraScreen";
import CardScreen from "./scenes/create/CardScreen";
import CardNameScreen from './scenes/create/CardNameScreen';
import NameTextColorScreen from "./scenes/create/NameTextColorScreen";
import NameTextSizeScreen from "./scenes/create/NameTextSizeScreen";
import CardTypeScreen from "./scenes/create/CardTypeScreen";
import AttributeScreen from "./scenes/create/AttributeScreen";
import LevelScreen from "./scenes/create/LevelScreen";
import AttackScreen from "./scenes/create/AttackScreen";
import DefenseScreen from "./scenes/create/DefenseScreen";
import MonsterTextScreen from "./scenes/create/MonsterTextScreen";
import MainTextScreen from "./scenes/create/MainTextScreen";
import MainTextSizeScreen from "./scenes/create/MainTextSizeScreen";
import EffectScreen from "./scenes/create/EffectScreen";
import PendulumScreen from "./scenes/create/PendulumScreen";
import PendulumTextSizeScreen from "./scenes/create/PendulumTextSizeScreen";
import PendulumBlueScreen from "./scenes/create/PendulumBlueScreen";
import PendulumRedScreen from "./scenes/create/PendulumRedScreen";
import LinkScreen from "./scenes/create/LinkScreen";
import LinkDirectionScreen from "./scenes/create/LinkDirectionScreen";

const cardParameter = createStackNavigator({
  empty:{
    screen:EmptyScreen
  },
  cardName:{
    screen:CardNameScreen
  },
  nameTextColor:{
    screen:NameTextColorScreen
  },
  nameTextSize:{
    screen:NameTextSizeScreen
  },
  cardType:{
    screen:CardTypeScreen
  },
  attribute:{
    screen:AttributeScreen
  },
  level:{
    screen:LevelScreen
  },
  attack:{
    screen:AttackScreen
  },
  defense:{
    screen:DefenseScreen
  },
  monsterText:{
    screen:MonsterTextScreen
  },
  mainText:{
    screen:MainTextScreen
  },
  mainTextSize:{
    screen:MainTextSizeScreen
  },
  effect:{
    screen:EffectScreen
  },
  pendulum:{
    screen:PendulumScreen
  },
  pendulumTextSize:{
    screen:PendulumTextSizeScreen
  },
  pendulumBlue:{
    screen:PendulumBlueScreen
  },
  pendulumRed:{
    screen:PendulumRedScreen
  },
  link:{
    screen:LinkScreen
  },
  linkDirection:{
    screen:LinkDirectionScreen
  }
})

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
  },
  cardParameter,
},{
  headerMode:"none",
})

const navigation = createAppContainer(stack)
export default navigation;
