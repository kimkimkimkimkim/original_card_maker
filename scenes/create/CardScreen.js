import React,{ Component } from "react";
import{
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

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

  render(){
    let information = this.props.navigation.state.params.information
    let getImage = new GetImage()

    return(
      <View style={styles.container}>
        {/* 取り込んだ画像 */}
        {<Image
          style={styles.img}
          source={{uri:information.imageURI}}
        />}
        {/* カード枠 */}
        {(() => {
          if(false)return false
          return(
            <Image 
              style={styles.img_card}
              source={getImage.getCardTypeImage(information.cardType)}
            />
          )
        })()}
        {/* 属性 */}
        {(() => {
          if(false)return false
          return(
            <Image 
              style={styles.img_card}
              source={getImage.getAttributeImage(information.attribute)}
            />
          )
        })()}
        {/* レベル */}
        {(() => {
          if(false)return false
          return(
            <Image 
              style={styles.img_card}
              source={getImage.getLevelImage(information.level)}
            />
          )
        })()}
        {/* ランク */}
        {(() => {
          if(true)return false
          return(
            <Image 
              style={styles.img_card}
              source={getImage.getRankImage(information.rank)}
            />
          )
        })()}
        {/* ステータス */}
        {(() => {
          if(false)return false
          return(
            <Image 
              style={styles.img_card}
              source={require("../../images/cards/6_others/status.png")}
            />
          )
        })()}
        {/* リンクステータス */}
        {(() => {
          if(true)return false
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
        <Text style={styles.txt_mainText}>{information.mainText}</Text>
        {/* 攻撃力 */}
        <Text style={styles.txt_attack}>{information.attack}</Text>
        {/* 守備力 */}
        <Text style={styles.txt_defense}>{information.defense}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  img:{
    position:"absolute",
    top:(height/2) - (cardHeight/2) + 81,
    left:(width/2) - (cardWidth/2) + 36.5,
    width:227.5,
    height:227.5
  },
  img_card:{
    position:"absolute",
    top:(height/2) - (cardHeight/2),
    left:(width/2) - (cardWidth/2),
    width:cardWidth,
    height:cardHeight,
  },
  txt_cardName:{
    position:"absolute",
    top:(height/2) - (cardHeight/2),
    left:(width/2) - (cardWidth/2),
    //backgroundColor:"red",
    marginTop:25,
    marginLeft:25,
    fontSize:19,
  },
  txt_monsterText:{
    position:"absolute",
    top:(height/2) - (cardHeight/2),
    left:(width/2) - (cardWidth/2),
    //backgroundColor:"red",
    marginTop:330,
    marginLeft:17,
    fontSize:10,
  },
  txt_mainText:{
    position:"absolute",
    top:(height/2) - (cardHeight/2),
    left:(width/2) - (cardWidth/2),
    //backgroundColor:"red",
    marginTop:343,
    marginLeft:23,
    fontSize:8,
  },
  txt_attack:{
    position:"absolute",
    top:(height/2) - (cardHeight/2),
    left:(width/2) - (cardWidth/2),
    //backgroundColor:"red",
    marginTop:398,
    marginLeft:189.5,
    fontSize:11,
  },
  txt_defense:{
    position:"absolute",
    top:(height/2) - (cardHeight/2),
    left:(width/2) - (cardWidth/2),
    //backgroundColor:"red",
    marginTop:398,
    marginLeft:252,
    fontSize:11,
  },
})