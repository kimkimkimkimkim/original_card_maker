import React,{ Component } from "react"
import{
  View,
  SafeAreaView,
} from "react-native"
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

//component
import InputImageComponent from "../../component/input/InputImageComponent"

export default class InputCardInformationScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedIndex:0,
      imageURI: "", 
      change:false,
      cardName:"",
      nameTextColor:"黒",
      nameTextSize:"中(全角11文字まで)",
      cardType:"通常モンスター",
      attribute:"闇",
      level:"1",
      attack:"",
      defense:"",
      monsterText:"【●族／通常】",
      mainText:"",
      mainTextSize:"中",
      effect:"なし",
      pendulum:"",
      pendulumTextSize:"中",
      pendulumBlue:"0",
      pendulumRed:"0",
      link:"1",
      linkDirection:'なし',
    }
  }

  render(){
    return(
      <SafeAreaView>
        <ActionSheetProvider>
          <InputImageComponent parent={this}/>
        </ActionSheetProvider>
      </SafeAreaView>
    )
  }
}