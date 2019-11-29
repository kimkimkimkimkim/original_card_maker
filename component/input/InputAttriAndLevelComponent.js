import React,{ Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native"
import CommonStyle from "../../common_style/CommonStyle";
import GetImage from "../../config/GetImage";

const attribute = ["闇","光","地","水","炎","風","神"]

export default class InputAttriAndLevelComponent extends Component {

  _onChangeText(text){
    //this.setState({cardName:text})
    this.props.parent.setState({cardName:text})
    //attribute:
    //level:
  }

  renderAttributeBall(index){
    let getImage = new GetImage()
    let isSelected = attribute[index] == this.props.parent.state.attribute
    console.log("attribute:",attribute[index])
    console.log("imagePath:",getImage.getAttributeImage(attribute[index]))
    return(
      /*
      <Image
        key = {index}
        style={{width:30,height:30,opacity:isSelected?0.2:1}}
        source={}
      />
      */
     <TouchableOpacity
      onPress={()=>this.props.parent.setState({attribute:attribute[index]})}
     >
        <View style={{width:30,height:30,borderRadius:15,backgroundColor:"lightblue",justifyContent:"center",alignItems:"center",opacity:isSelected?1:0.2}}>
          <Text>{attribute[index]}</Text>
        </View>
     </TouchableOpacity>
    )
  }

  renderAttributeArea(){
    let attributeBalls = []
    for(let i=0;i<attribute.length;i++){
      attributeBalls.push(this.renderAttributeBall(i))
    }
    return(
      <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between",marginTop:10}}>
        {attributeBalls}
      </View>
    )
  }

  renderLevelBall(index){
    let isLessSelectedLevel = (index < Number(this.props.parent.state.level))
    return(
      <TouchableOpacity onPress={()=>this.props.parent.setState({level:String(index+1)})}>
        <View style={{width:20,height:20,borderRadius:10,backgroundColor:"orange",justifyContent:"center",alignItems:"center",opacity:isLessSelectedLevel?1:0.2}}>
          <Text>★</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderLevelArea(){
    let levelArr = []
    for(let i=0;i<12;i++){
      levelArr.push(this.renderLevelBall(i))
    }
    return(
      <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between",marginTop:10}}>
        {levelArr}
      </View>
    )
  }

  render(){
    return(
      <View style={[CommonStyle.InputListContainer]}>
        <Text style={CommonStyle.InputListTitle}>属性・レベル</Text>
        {this.renderAttributeArea()}
        {this.renderLevelArea()}
      </View>
    )
  }
}

const styles=StyleSheet.create({
  textInput:{
    //height:35,
    backgroundColor:"white",
    marginTop:5,
    borderRadius:5,
    padding:5,
    fontSize:18,
    marginBottom:5
  }
})