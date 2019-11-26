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
    this.props.parent.setState({mainText:text})
  }

  render(){
    return(
      <View style={[CommonStyle.InputListContainer]}>
        <Text style={CommonStyle.InputListTitle}>説明</Text>
        <TextInput
          style={styles.textInput}
          value={this.props.parent.state.mainText}
          onChangeText={text => this._onChangeText(text)}
          multiline={true}
        />
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
  }
})