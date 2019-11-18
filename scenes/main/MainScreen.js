import React, { Component } from "react";
import Constants from "../../config/Constants";
import Color from "../../config/Color";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

import { Icon, Button } from "react-native-elements"

export default class MainScreen extends Component {

  toCreateScreen(){
    this.props.navigation.navigate("Input")
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.container_logo}>
          <Icon
            name='android'
            color={Color.main}
            size={200}
          />
        </View>
        <View style={styles.container_bottom}>
          <Button
            icon={
              <Icon
                name="add-to-photos"
                color={Color.background}
              />
            }
            buttonStyle={styles.btn}
            onPress={() => this.toCreateScreen()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:Constants.statusBarHeight,
    backgroundColor:Color.background
  },
  container_logo:{
    width:"100%",
    height:"70%",
    alignItems:"center",
    justifyContent:"center",
  },
  container_bottom:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  btn:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:Color.main,
  }
})