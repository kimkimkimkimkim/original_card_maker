import React,{ Component } from "react";
import{
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

export default class CardScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image 
          style={styles.img_card}
          source={require("../../images/cards/1_monster/normal.png")}
        />
        <Image 
          style={styles.img_card}
          source={require("../../images/cards/4_attribute/darkness.png")}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  img_card:{
    position:"absolute",
    top:-450,
    left:40,
    resizeMode:"contain",
    width:300,
  }
})