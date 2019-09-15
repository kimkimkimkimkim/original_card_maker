import React, { Component } from "react";
import Constants from "../../config/Constants";
import Color from "../../config/Color";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from "react-native";

import { Input, ButtonGroup, Avatar } from 'react-native-elements';

import CreateMonsterScreen from "./CreateMonsterScreen";

export default class CreateScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedIndex:0,
      imageURI: "a", 
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

  updateImage(){
    //imageURI
    let uri = this.props.navigation.getParam("uri","")
    if(uri != "")this.setState({ imageURI : uri});
  }

  updateIndex(selectedIndex){
    this.setState({selectedIndex:selectedIndex})
  }

  onChangeText(key,text){
    this.state[key] = text
    this.setState({
      change:!this.state.change
    })
  }

  renderListItem(title,key){
    let txt = this.state[key]
    if(key=="linkDirection"){
      if(txt != "なし") txt = "選択済み"
    }

    return(
      <TouchableOpacity 
        style={styles.container_listItem}
        onPress={() => this.props.navigation.navigate(key,{
          key:key,
          value:this.state[key],
          update:this.onChangeText.bind(this)
        })}
      >
        <View style={styles.container_leftView}>
          <Text style={styles.txt_label}>{title}</Text>
        </View>
        <View style={styles.container_rightView}>
          <Text style={styles.txt_content}>{txt}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  
  render(){
    const buttons = ['モンスター', '魔法', '罠']
    const { selectedIndex } = this.state

    return(
      <View style={styles.container}>
        <ScrollView style={styles.container_scroll}>
        <View style={{justifyContent:"center",alignItems:"center"}}>
          <Avatar
            size="medium"
            title="画像"
            onPress={() => this.props.navigation.navigate("Camera",{update:this.updateImage.bind(this)})}
            source={{uri: this.state.imageURI}}
            showEditButton
          />
        </View>
        {this.renderListItem("カード名","cardName")}
        {this.renderListItem("文字色","nameTextColor")}
        {this.renderListItem("文字サイズ","nameTextSize")}
        {this.renderListItem("カードの種類","cardType")}
        {this.renderListItem("属性","attribute")}
        {this.renderListItem("レベル","level")}
        {this.renderListItem("攻撃力","attack")}
        {this.renderListItem("守備力","defense")}
        {this.renderListItem("モンスターテキスト","monsterText")}
        {this.renderListItem("テキスト","mainText")}
        {this.renderListItem("文字サイズ","mainTextSize")}
        {this.renderListItem("エフェクト","effect")}
        {this.renderListItem("ペンデュラム","pendulum")}
        {this.renderListItem("文字サイズ","pendulumTextSize")}
        {this.renderListItem("青","pendulumBlue")}
        {this.renderListItem("赤","pendulumRed")}
        {this.renderListItem("リンク","link")}
        {this.renderListItem("方向","linkDirection")}
        </ScrollView>
        <TouchableOpacity 
          style={styles.btn_toNext}
          onPress={() => this.props.navigation.navigate("Card",{
            information:this.state
          })}
        >
          <Text>カードに反映</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop:Constants.statusBarHeight,
    flex:1,
    backgroundColor:Color.background,
  },
  txt_label:{
    marginLeft:15,
    marginTop:15,
  },
  btn_selectImage:{
    width:100,
    height:30,
    marginLeft:15
  },  
  img:{
    width:30,
    height:30
  },
  container_main:{
    flex:1
  },
  btn_toNext:{
    marginBottom:83,
    height:30,
    justifyContent:"center",
    alignItems:"center",
  },
  container_scroll:{
    flex:1
  },  
  container_listItem:{
    width:"100%",
    height:50,
    flexDirection:"row",
    alignItems:"center",
  },
  container_leftView:{
    width:100,
    height:"100%",
    justifyContent:"center",
  },  
  txt_label:{

  },
  container_rightView:{
    flex:1,
    justifyContent:"center",
    borderColor: 'gray', 
    borderBottomWidth: 1,
    marginRight:20,
  },
  txt_content:{

  },
})