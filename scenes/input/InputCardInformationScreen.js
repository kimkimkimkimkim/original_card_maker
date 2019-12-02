import React,{ Component } from "react"
import{
  View,
  SafeAreaView,
  ScrollView,
} from "react-native"
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//component
import InputImageComponent from "../../component/input/InputImageComponent"
import InputCardNameComponent from "../../component/input/InputCardNameComponent"
import InputMainTextComponent from "../../component/input/InputMainTextComponent"
import InputCardTypeComponent from "../../component/input/InputCardTypeComponent"
import InputAttriAndLevelComponent from "../../component/input/InputAttriAndLevelComponent"
import InputAttackAndDefenseComponent from "../../component/input/InputAttackAndDefenseComponent"
import InputMonsterTextComponent from "../../component/input/InputMonsterTextComponent"
import InputPendulumComponent from "../../component/input/InputPendulumComponent"
import InputLinkComponent from "../../component/input/InputLinkComponent"

//cardproparty
import CardDefaultProparty from "../../config/CardDefaultProparty"

//screen
import InputMonsterCardInformationScreen from "./InputMonsterCardInformationScreen"

const TopTabNavigator = createMaterialTopTabNavigator({
  Monster:{
    screen:InputMonsterCardInformationScreen
  },
  Magic:{
    screen:InputMonsterCardInformationScreen
  },
  Trap:{
    screen:InputMonsterCardInformationScreen
  },
})

const AppContainer = createAppContainer(TopTabNavigator);

export default class InputCardInformationScreen extends Component {

  constructor(props){
    super(props)
    this.state = CardDefaultProparty
  }



  render(){
    console.log("state:",JSON.stringify(this.state))
    return(
      <ActionSheetProvider>
        <SafeAreaView style={{flex:1}}>
          <KeyboardAwareScrollView
            keyboardOpeningTime={0}
          >
            <InputImageComponent parent={this}/>
            <InputCardNameComponent parent={this}/>
            <InputMainTextComponent parent={this}/>
            <InputCardTypeComponent parent={this}/>
            <InputAttriAndLevelComponent parent={this}/>
            <InputAttackAndDefenseComponent parent={this}/>
            <InputMonsterTextComponent parent={this}/>
            <InputPendulumComponent parent={this}/>
            <InputLinkComponent parent={this}/>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </ActionSheetProvider>
    )
  }
}