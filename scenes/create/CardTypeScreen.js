import React, {Component} from  "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
} from "react-native";

import Color from "../../config/Color";

import RadioForm, {
    RadioButton, 
    RadioButtonInput, 
    RadioButtonLabel
} from 'react-native-simple-radio-button';

//props.navigation.state.params
/*
    key <= 何のパラメーターか（例：cardName,textColor,,,
    value <= そのパラメーターの値
    update <= (key,value) setStateしてくれる
*/

var radio_props = [
    {label: '通常モンスター', value: 0 },
    {label: '効果モンスター', value: 1 },
    {label: '儀式モンスター', value: 2 },
    {label: '融合モンスター', value: 3 },
    {label: 'シンクロモンスター', value: 4 },
    {label: 'エクシーズモンスター', value: 5 },
    {label: '通常ペンデュラム', value: 6 },
    {label: '効果ペンデュラム', value: 7 },
    {label: 'シンクロペンデュラム', value: 8 },
    {label: 'エクシーズペンデュラム', value: 9 },
    {label: '融合ペンデュラム', value: 10 },
    {label: '儀式ペンデュラム', value: 11 },
    {label: 'リンクモンスター', value: 12 },
    {label: '通常魔法', value: 13 },
    {label: '速攻魔法', value: 14 },
    {label: '永続魔法', value: 15 },
    {label: '装備魔法', value: 16 },
    {label: '儀式魔法', value: 17 },
    {label: 'フィールド魔法', value: 18 },
    {label: '通常罠', value: 19 },
    {label: '永続罠', value: 20 },
    {label: 'カウンター罠', value: 21 },
    {label: 'トークン', value: 22 },
    {label: 'トークン（記述可）', value: 23 },
];

export default class CardTypeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          headerLeft: (
            <TouchableHighlight
				onPress={() => navigation.navigate("Create")}
				underlayColor={'#444444'}
				style={{width:40,height:40,backgroundColor:"red"}}
            >
                <Text>戻る</Text>
			</TouchableHighlight>
          ),
          title:"文字サイズ"
        };
    };

    constructor(props){
        super(props)
        this.state = {
            text:"",
            value:null,
        }
    }

    componentDidMount(){
        const target = radio_props.find(obj => 
            obj.label === this.props.navigation.getParam("value",""));
        this.setState({
            value:target.value
        })
    }

    onChangeText(text){
        this.setState({
            text:text
        })
    }

    save(){
        let params = this.props.navigation.state.params
        params.update(params.key,radio_props[this.state.value].label) //表示するテキストを保存する
        this.props.navigation.navigate("Create")
    }

    render(){
        if(this.state.value==null)return false
        return(
            <View style={styles.container}>
                <View style={{flex:1,flexDirection:"row"}}>
                    <View style={{flex:1}}/>
                    <ScrollView>
                        <RadioForm
                            radio_props={radio_props}
                            initial={this.state.value}
                            onPress={(value) => {this.setState({value:value})}}
                        />
                    </ScrollView>
                    <View style={{flex:1}}/>
                </View>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={() => this.save()}
                >
                    <Text>保存する</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:Color.background
    },
    txtInput:{
        height:40,
        width:150,
        borderColor: 'gray', 
        borderBottomWidth: 1
    },
    btn:{
        width:180,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:Color.point,
        marginBottom:100,
    }
})