import React,{ Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Dimensions
} from "react-native"
import CommonStyle from "../../common_style/CommonStyle";
import { Dropdown } from "react-native-material-dropdown"
const width = Dimensions.get("window").width;
/*
pendulum:"",
  pendulumTextSize:"中",
  pendulumBlue:"0",
  pendulumRed:"0",*/

export default class InputCardNameComponent extends Component {

  render(){
    let textSizeData=[{value:"中"},{value:"小"}]
    let blueData=[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"}]
    let redData=[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"},{value:"10"},{value:"11"},{value:"12"},{value:"13"}]
    return(
      <View style={[CommonStyle.InputListContainer]}>
        <Text style={CommonStyle.InputListTitle}>ペンデュラム</Text>
        <TextInput
          style={styles.textInput}
          value={this.props.parent.state.pendulum}
          onChangeText={text => this.props.parent.setState({pendulum:text})}
          multiline={true}
        />
        <View style={{flexDirection:"row",justifyContent:"space-between"}}> 
          <Dropdown
            label="文字サイズ"
            data={textSizeData}
            value={this.props.parent.state.pendulumTextSize}
            baseColor="white"
            textColor="black"
            selectedItemColor="black"
            itemColor="rgba(0,0,0,0.2)"
            itemTextStyle={{color:"black"}}
            containerStyle={{width:width/4}}
            style={{backgroundColor:"white",paddingLeft:5,borderRadius:5}}
            onChangeText={(value)=>this.props.parent.setState({pendulumTextSize:value})}
          />
          <Dropdown
            label="--青--"
            data={blueData}
            value={this.props.parent.state.pendulumBlue}
            baseColor="white"
            textColor="black"
            selectedItemColor="black"
            itemColor="rgba(0,0,0,0.2)"
            containerStyle={{width:width/4}}
            style={{backgroundColor:"white",paddingLeft:5,borderRadius:5}}
            onChangeText={(value)=>this.props.parent.setState({pendulumBlue:value})}
          />
          <Dropdown
            label="--赤--"
            data={redData}
            value={this.props.parent.state.pendulumRed}
            baseColor="white"
            textColor="black"
            selectedItemColor="black"
            itemColor="rgba(0,0,0,0.2)"
            containerStyle={{width:width/4}}
            style={{backgroundColor:"white",paddingLeft:5,borderRadius:5}}
            onChangeText={(value)=>this.props.parent.setState({pendulumRed:value})}
          />
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  textInput:{
    width:"100%",
    backgroundColor:"white",
    marginTop:5,
    borderRadius:5,
    padding:5,
    fontSize:18,
    marginBottom:5,
    minHeight:60,
  }
})