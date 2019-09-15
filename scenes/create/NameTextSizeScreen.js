import React, {Component} from  "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight
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
    {label: '中(全角11文字まで)', value: 0 },
    {label: '小(全角17文字まで)', value: 1 },
];

export default class NameTextSizeScreen extends Component {

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
                <RadioForm
                    radio_props={radio_props}
                    initial={this.state.value}
                    onPress={(value) => {this.setState({value:value})}}
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