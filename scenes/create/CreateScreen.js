import React, { Component } from "react";
import Constants from "../../config/Constants";
import Color from "../../config/Color";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

import { Input, ButtonGroup } from 'react-native-elements';

import CreateMonsterScreen from "./CreateMonsterScreen";

export default class CreateScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedIndex:0,
      imageURI: "aaaaaaaaa", 
    }
  }

  updateImage(){
    //imageURI
    let uri = this.props.navigation.getParam("uri","")
    console.log("uri",this.props.navigation)
    if(uri != "")this.setState({ imageURI : uri});
  }

  updateIndex(selectedIndex){
    this.setState({selectedIndex:selectedIndex})
  }
  
  render(){
    const buttons = ['モンスター', '魔法', '罠']
    const { selectedIndex } = this.state

    return(
      <View style={styles.container}>
        <Text style={styles.txt_label}>画像選択</Text>
        <TouchableOpacity 
          style={styles.btn_selectImage}
          onPress={() => this.props.navigation.navigate("Camera",{update:this.updateImage.bind(this)})}
        >
          <Image
            style={styles.img}
            source={{uri: this.state.imageURI}}
          />
        </TouchableOpacity>
        <Text style={styles.txt_label}>カード名</Text>
        <Input
          placeholder="カード名"
        />
        <Input
          placeholder="文字色"
        />
        <Input
          placeholder="ふりがな"
        />
        <ButtonGroup
          onPress={(selectedIndex) => this.updateIndex(selectedIndex)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 40}}
        />
        <View style={styles.container_main}>
          {(() => {
            switch(this.state.selectedIndex){
              case 0:
                return <CreateMonsterScreen />
              default:
                break;
            }
          })()}
        </View>
        <TouchableOpacity 
          style={styles.btn_toNext}
          onPress={() => this.props.navigation.navigate("Card")}
        >
          <Text>カードに反映</Text>
        </TouchableOpacity>
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
  },
  btn_selectImage:{
    width:100,
    height:30,
    marginLeft:15
  },  
  img:{
    width:30,
    height:30
  },
  container_main:{
    flex:1
  },
  btn_toNext:{
    marginBottom:83,
    height:30,
    justifyContent:"center",
    alignItems:"center",
  }
})