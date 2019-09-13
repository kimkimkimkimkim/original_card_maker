import React, { Component } from "react";
import Constants from "../../config/Constants";
import Color from "../../config/Color";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Input, ButtonGroup } from 'react-native-elements';

export default class CreateMonsterScreen extends Component {
  render(){
    return(
      <ScrollView>
        <Text style={styles.txt_label}>種類</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>属性</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>レベル</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>攻撃力</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>守備力</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>モンスターテキスト</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>テキスト</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>エフェクト</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>ペンデュラム</Text>
        <Input
          placeholder="カード名"
        />
        <Text style={styles.txt_label}>リンク</Text>
        <Input
          placeholder="カード名"
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  txt_label:{
    marginLeft:15,
    marginTop:15,
  },
})