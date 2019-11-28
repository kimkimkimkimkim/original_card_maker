import React,{ Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text
} from "react-native"
import CommonStyle from "../../common_style/CommonStyle";
import Modal from "react-native-modalbox"


export default class InputCardTypeComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      cardType:this.props.parent.state.cardType
    }
  }

  _onChangeText(text){
    //this.setState({cardName:text})
    this.props.parent.setState({mainText:text})
  }

  renderBtn(type,width){
    return(
      <View
        style={{width:width,height:30,padding:2}}
      >
        <TouchableOpacity
          style={{flex:1,backgroundColor:(this.state.cardType==type)?"orange":"lightblue",justifyContent:"center",alignItems:"center",borderRadius:5}}
          onPress={()=>this.setState({cardType:type})}
        >
          <Text style={{color:"white"}}>{type}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderTypeView(title,list,columnCount){
    let wRatio = 100/columnCount
    let renderBtns = []
    list.forEach(l => {
      renderBtns.push(this.renderBtn(l,wRatio+"%"))
    })
    return(
      <View>
        <Text>{title}</Text>
        <View style={{flexDirection:"row",flexWrap:"wrap"}}> 
          {renderBtns}
        </View>
        <View style={{height:10}}/>
      </View>
    )
  }

  render(){

    let monstarList = [
      "通常モンスター",
      "効果モンスター",
      "儀式モンスター",
      "融合モンスター",
      "シンクロモンスター",
      "エクシーズモンスター",
      "通常ペンデュラム",
      "効果ペンデュラム",
      "儀式ペンデュラム",
      "融合ペンデュラム",
      "シンクロペンデュラム",
      "エクシーズペンデュラム",
      "リンクモンスター"
    ]
    let magicList = [
      "通常魔法",
      "速攻魔法",
      "永続魔法",
      "装備魔法",
      "儀式魔法",
      "フィールド魔法"
    ]
    let trapList = [
      "通常罠",
      "永続罠",
      "カウンター罠"
    ]
    return(
      <View>
        <View style={[CommonStyle.InputListContainer]}>
          <Text style={CommonStyle.InputListTitle}>カード枠種類</Text>
          <TouchableOpacity
            style={styles.textInput}
            onPress={()=>this.refs.modal.open()}
          >
            <Text>{this.props.parent.state.cardType}</Text>
          </TouchableOpacity>
        </View>
        <Modal
          ref={"modal"}
          coverScreen={true}
          style={{width:350,height:500,backgroundColor:"white",borderWidth:1,borderColor:"black",paddingLeft:10,paddingRight:10}}
        >
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            {this.renderTypeView("モンスター",monstarList,2)}
            {this.renderTypeView("魔法",magicList,2)}
            {this.renderTypeView("罠",trapList,2)}

            <TouchableOpacity
              style={{width:100,height:30,justifyContent:"center",alignItems:"center",backgroundColor:"lightgreen",marginTop:10}}
              onPress={()=>{
                this.refs.modal.close()
                this.props.parent.setState({cardType:this.state.cardType})
              }}
            >
              <Text style={{color:"white"}}>決定</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  textInput:{
    width:"100%",
    height:25,
    backgroundColor:"white",
    marginTop:5,
    borderRadius:5,
    padding:5,
    fontSize:18,
    marginBottom:5,
  }
})