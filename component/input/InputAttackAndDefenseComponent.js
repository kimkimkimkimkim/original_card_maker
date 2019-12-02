import React,{ Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from "react-native"
import CommonStyle from "../../common_style/CommonStyle";

export default class InputAttackAndDefenseComponent extends Component {

  _onChangeText(text){
    //this.setState({cardName:text})
    this.props.parent.setState({cardName:text})
  }

  render(){
    return(
      <View style={[CommonStyle.InputListContainer]}>
        <Text style={CommonStyle.InputListTitle}>攻撃力・守備力</Text>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <TextInput
            style={styles.textInput}
            value={this.props.parent.state.attack}
            onChangeText={text => this.props.parent.setState({attack:text})}
            keyboardType="numeric"
          />
          <Text style={{marginLeft:10,marginRight:10,color:"white"}}>/</Text>
          <TextInput
            style={styles.textInput}
            value={this.props.parent.state.defense}
            onChangeText={text => this.props.parent.setState({defense:text})}
            keyboardType="numeric"
          />
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  textInput:{
    //height:35,
    flex:1,
    backgroundColor:"white",
    marginTop:5,
    borderRadius:5,
    padding:5,
    fontSize:18,
    marginBottom:5
  }
})