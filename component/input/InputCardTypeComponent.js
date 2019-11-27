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

  renderBtn(type){
    return(
      <TouchableOpacity
        style={{width:40,height:20,backgroundColor:"blue"}}
        onPress={()=>this.setState({cardType:type})}
      >

      </TouchableOpacity>
    )
  }

  render(){
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
          style={{width:300,height:400,backgroundColor:"white",borderWidth:1,borderColor:"black"}}
        >
          {this.renderBtn("monster")}
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