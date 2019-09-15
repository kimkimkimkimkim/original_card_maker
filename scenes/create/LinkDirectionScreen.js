import React, {Component} from  "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";

import Color from "../../config/Color";

import { CheckBox } from "react-native-elements";

/*
import RadioForm, {
    RadioButton, 
    RadioButtonInput, 
    RadioButtonLabel
} from 'react-native-simple-radio-button';
*/

//props.navigation.state.params
/*
    key <= 何のパラメーターか（例：cardName,textColor,,,
    value <= そのパラメーターの値
    update <= (key,value) setStateしてくれる
*/

export default class LinkDirectionScreen extends Component {

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
            checked:false,
            luChecked:false,
            uChecked:false,
            ruChecked:false,
            lChecked:false,
            rChecked:false,
            ldChecked:false,
            dChecked:false,
            rdChecked:false,
        }
    }

    componentDidMount(){
        let value = this.props.navigation.getParam("value","")
        let checked = []
        if(value != "なし"){
            checked = value.split(" ")
        }
        this.setState({
            value:value,
            luChecked:this.parseStrToBoolean(checked[0]),
            uChecked:this.parseStrToBoolean(checked[1]),
            ruChecked:this.parseStrToBoolean(checked[2]),
            lChecked:this.parseStrToBoolean(checked[3]),
            rChecked:this.parseStrToBoolean(checked[4]),
            ldChecked:this.parseStrToBoolean(checked[5]),
            dChecked:this.parseStrToBoolean(checked[6]),
            rdChecked:this.parseStrToBoolean(checked[7]),
        })
    }

    parseStrToBoolean(str) {
        // 文字列を判定
        return (str == "1") ? true : false;
    }

    parseBooleanToStr(bool) {
        // ブール値を判定
        return (bool) ? "1" : "0";
    }

    onChangeText(text){
        this.setState({
            text:text
        })
    }

    save(){
        let params = this.props.navigation.state.params
        let value  = this.parseBooleanToStr(this.state.luChecked) + " " +
                     this.parseBooleanToStr(this.state.uChecked) + " " +
                     this.parseBooleanToStr(this.state.ruChecked) + " " +
                     this.parseBooleanToStr(this.state.lChecked) + " " +
                     this.parseBooleanToStr(this.state.rChecked) + " " +
                     this.parseBooleanToStr(this.state.ldChecked) + " " +
                     this.parseBooleanToStr(this.state.dChecked) + " " +
                     this.parseBooleanToStr(this.state.rdChecked)
        if(value == "0 0 0 0 0 0 0 0") value = "なし"
        params.update(params.key,value) //表示するテキストを保存する
        this.props.navigation.navigate("Create")
    }

    render(){
        if(this.state.value==null)return false
        return(
            <View style={styles.container}>
                <CheckBox
                    center
                    title='左上'
                    checked={this.state.luChecked}
                    onPress={() => this.setState({luChecked: !this.state.luChecked})}
                />
                <CheckBox
                    center
                    title='上'
                    checked={this.state.uChecked}
                    onPress={() => this.setState({uChecked: !this.state.uChecked})}
                />
                <CheckBox
                    center
                    title='右上'
                    checked={this.state.ruChecked}
                    onPress={() => this.setState({ruChecked: !this.state.ruChecked})}
                />
                <CheckBox
                    center
                    title='左'
                    checked={this.state.lChecked}
                    onPress={() => this.setState({lChecked: !this.state.lChecked})}
                />
                <CheckBox
                    center
                    title='右'
                    checked={this.state.rChecked}
                    onPress={() => this.setState({rChecked: !this.state.rChecked})}
                />
                <CheckBox
                    center
                    title='左下'
                    checked={this.state.ldChecked}
                    onPress={() => this.setState({ldChecked: !this.state.ldChecked})}
                />
                <CheckBox
                    center
                    title='下'
                    checked={this.state.dChecked}
                    onPress={() => this.setState({dChecked: !this.state.dChecked})}
                />
                <CheckBox
                    center
                    title='右下'
                    checked={this.state.rdChecked}
                    onPress={() => this.setState({rdChecked: !this.state.rdChecked})}
                />
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
        backgroundColor:Color.point
    }
})