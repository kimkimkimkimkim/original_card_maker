import React,{ Component } from "react"
import{
  View,
  SafeAreaView,
  ScrollView,
} from "react-native"
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

//component
import InputImageComponent from "../../component/input/InputImageComponent"
import InputCardNameComponent from "../../component/input/InputCardNameComponent"
import InputMainTextComponent from "../../component/input/InputMainTextComponent"
import InputCardTypeComponent from "../../component/input/InputCardTypeComponent"
import InputAttriAndLevelComponent from "../../component/input/InputAttriAndLevelComponent"

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
          <ScrollView>
            <InputImageComponent parent={this}/>
            <InputCardNameComponent parent={this}/>
            <InputMainTextComponent parent={this}/>
            <InputCardTypeComponent parent={this}/>
            <InputAttriAndLevelComponent parent={this}/>
          </ScrollView>
        </SafeAreaView>
      </ActionSheetProvider>
    )
  }
}