import React,{ Component } from "react";
import{
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  CameraRoll,
} from "react-native";

import ViewShot,{ captureRef } from "react-native-view-shot";

import GetImage from "../../config/GetImage";

var Dimensions = require('Dimensions');
var { width, height, scale } = Dimensions.get('window'); //get window size

//変数宣言
let cardWidth = 300;
let cardRatio = 1.46;
let cardHeight = cardWidth * cardRatio;
//this.props.navigation.state.params
/*
  information <= カードの情報
*/

export default class CardScreen extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    console.log(this.props.navigation.state.params)
  }

  saveImage(){
    this.viewShot.capture().then(uri => {
      console.log("uri",uri)
      CameraRoll.saveToCameraRoll(uri);
    })
  }

  render(){
    let information = this.props.navigation.state.params.information
    let getImage = new GetImage()
    let cardType = information.cardType
    return(
      <View style={styles.container}>
        <View style={styles.container_top}>

        </View>
        <View  style={{flex:1}}/>
        <View style={styles.container_bottom}>
          <TouchableOpacity
            onPress={() => this.saveImage()}
          >
            <Text>保存する</Text>
          </TouchableOpacity>
        </View>
        <ViewShot
          ref={ref => (this.viewShot = ref)}
          style={styles.container_card}
        >
        {/* 取り込んだ画像 */}
        <Image
          style={styles.img}
          source={{uri:information.imageURI}}
        />
        {/* カード枠 */}
        {(() => {
          return(
            <Image 
              style={styles.img_card}
              source={getImage.getCardTypeImage(information.cardType)}
            />
          )
        })()}
        {/* 属性 */}
        {(() => {
          if(cardType.indexOf("魔法")!=-1 || cardType.indexOf("罠")!=-1)return false
          return(
            <Image 
              style={styles.img_card}
              source={getImage.getAttributeImage(information.attribute)}
            />
          )
        })()}
        {/* レベル */}
        {(() => {
          if(cardType.indexOf("魔法")!=-1 || cardType.indexOf("罠")!=-1 || cardType.indexOf("リンク")!=-1)return false
          if(cardType.indexOf("エクシーズ")!=-1)return false
          return(
            <Image 
              style={styles.img_card}
              source={getImage.getLevelImage(information.level)}
            />
          )
        })()}
        {/* ランク */}
        {(() => {
          if(cardType.indexOf("魔法")!=-1 || cardType.indexOf("罠")!=-1 || cardType.indexOf("リンク")!=-1)return false
          if(cardType.indexOf("エクシーズ")==-1)return false
          return(
            <Image 
              style={styles.img_card}
              source={getImage.getRankImage(information.level)}
            />
          )
        })()}
        {/* ステータス */}
        {(() => {
          if(cardType.indexOf("魔法")!=-1 || cardType.indexOf("罠")!=-1)return false
          if(cardType.indexOf("リンク")!=-1)return false
          return(
            <Image 
              style={styles.img_card}
              source={require("../../images/cards/6_others/status.png")}
            />
          )
        })()}
        {/* リンクステータス */}
        {(() => {
          if(cardType.indexOf("魔法")!=-1 || cardType.indexOf("罠")!=-1)return false
          if(cardType.indexOf("リンク")==-1)return false
          return(
            <Image 
              style={styles.img_card}
              source={require("../../images/cards/6_others/status_link.png")}
            />
          )
        })()}
        {/* ホログラム */}
        {(() => {
          if(false)return false
          return(
            <Image 
              style={styles.img_card}
              source={require("../../images/cards/6_others/hologram.png")}
            />
          )
        })()}
        {/* カード名 */}
        <Text style={styles.txt_cardName}>{information.cardName}</Text>
        {/* モンスターテキスト */}
        <Text style={styles.txt_monsterText}>{information.monsterText}</Text>
        {/* メインテキスト */}
        {(() => {
          if(information.monsterText==""){
            return(
              <Text style={[styles.txt_mainText,{marginTop:330}]}>{information.mainText}</Text>
            )
          }else{
            return(
              <Text style={styles.txt_mainText}>{information.mainText}</Text>
            )
          }
        })()}
        {/* 攻撃力 */}
        {(() => {
          if(cardType.indexOf("魔法")!=-1 || cardType.indexOf("罠")!=-1)return false
          return(
            <Text style={styles.txt_attack}>{information.attack}</Text>
          )
        })()}
        {/* 守備力 */}
        {(() => {
          if(cardType.indexOf("リンク")==-1 || cardType.indexOf("魔法")!=-1 || cardType.indexOf("罠")!=-1){
            return(
              <Text style={styles.txt_defense}>{information.defense}</Text>
            )
          }
        })()}
        </ViewShot>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  container_card:{
    position:"absolute",
    top:(height/2) - (cardHeight/2),
    left:(width/2) - (cardWidth/2),
    width:cardWidth,
    height:cardHeight,
    backgroundColor:"transparent"
  },
  img:{
    position:"absolute",
    top:81,
    left:36,
    width:228,
    height:228
  },
  img_card:{
    position:"absolute",
    top:0,
    left:0,
    width:cardWidth,
    height:cardHeight,
  },
  txt_cardName:{
    position:"absolute",
    top:0,
    left:0,
    //backgroundColor:"red",
    marginTop:25,
    marginLeft:25,
    fontSize:19,
  },
  txt_monsterText:{
    position:"absolute",
    top:0,
    left:0,
    //backgroundColor:"red",
    marginTop:330,
    marginLeft:17,
    fontSize:10,
  },
  txt_mainText:{
    position:"absolute",
    top:0,
    left:0,
    //backgroundColor:"red",
    marginTop:343,
    marginLeft:23,
    fontSize:8,
  },
  txt_attack:{
    position:"absolute",
    top:0,
    left:0,
    //backgroundColor:"red",
    marginTop:398,
    marginLeft:189.5,
    fontSize:11,
  },
  txt_defense:{
    position:"absolute",
    top:0,
    left:0,
    //backgroundColor:"red",
    marginTop:398,
    marginLeft:252,
    fontSize:11,
  },
  container_bottom:{
    height:100,
    alignItems:"center"
  }
})