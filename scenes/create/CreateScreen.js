import React, { Component } from "react";
import Constants from "../../config/Constants";
import Color from "../../config/Color";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

import { Input } from 'react-native-elements';

export default class CreateScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.txt_label}>カード名</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>カード名</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>カード名</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>カード名</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>カード名</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>カード名</Text>
        <Input
          placeholder="カード名"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop:Constants.statusBarHeight,
    flex:1,
    backgroundColor:Color.background,
  },
  txt_label:{
    marginLeft:15,
    marginTop:15,
  }
})