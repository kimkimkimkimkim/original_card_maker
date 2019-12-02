import React,{ Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from "react-native"
import CommonStyle from "../../common_style/CommonStyle";

export default class InputMonsterTextComponent extends Component {

  render(){
    return(
      <View style={[CommonStyle.InputListContainer]}>
        <Text style={CommonStyle.InputListTitle}>モンスターテキスト</Text>
        <TextInput
          style={styles.textInput}
          value={this.props.parent.state.monsterText}
          onChangeText={text => this.props.parent.setState({monsterText:text})}
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