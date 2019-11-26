import React,{ Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from "react-native"
import CommonStyle from "../../common_style/CommonStyle";

export default class InputCardNameComponent extends Component {

  _onChangeText(text){
    //this.setState({cardName:text})
    this.props.parent.setState({cardName:text})
  }

  render(){
    return(
      <View style={[CommonStyle.InputListContainer]}>
        <Text style={CommonStyle.InputListTitle}>カード名</Text>
        <TextInput
          style={styles.textInput}
          value={this.props.parent.state.cardName}
          onChangeText={text => this._onChangeText(text)}
        />
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