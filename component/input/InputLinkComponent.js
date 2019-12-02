import React,{ Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from "react-native"
import CommonStyle from "../../common_style/CommonStyle";

/* link:"1",
  linkDirection:'なし',*/

export default class InputLinkComponent extends Component {

  render(){
    return(
      <View style={[CommonStyle.InputListContainer]}>
        <Text style={CommonStyle.InputListTitle}>リンク</Text>
        <TextInput
          style={styles.textInput}
          value={this.props.parent.state.link}
          onChangeText={text => this.setState({link:text})}
          keyboardType="numeric"
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