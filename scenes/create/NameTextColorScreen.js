import React, {Component} from  "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Picker,
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
    {label: '黒', value: 0 },
    {label: '白', value: 1 },
    {label: '銀', value: 2 },
    {label: '金', value: 3 },
    {label: '赤', value: 4 },
];

export default class NameTextColorScreen extends Component {

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
          title:"文字色"
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
        const target = radio_props.find(obj => obj.label === this.props.navigation.getParam("value",""));
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
                    onPress={(index) => {this.setState({value:index})}}
                />
                {/*}
                <RadioForm
                    formHorizontal={true}
                    animation={true}
                >
                {radio_props.map((obj, i) => {
                    <RadioButton labelHorizontal={true} key={i} >
                    <RadioButtonInput
                        obj={obj}
                        index={i}
                        isSelected={this.state.value === i}
                        onPress={(value) => {this.setState({value:value})}}
                        borderWidth={1}
                        buttonInnerColor={'#e74c3c'}
                        buttonOuterColor={this.state.value === i ? '#2196f3' : '#000'}
                        buttonSize={40}
                        buttonOuterSize={80}
                        buttonStyle={{}}
                        buttonWrapStyle={{marginLeft: 10}}
                    />
                    <RadioButtonLabel
                        obj={obj}
                        index={i}
                        labelHorizontal={true}
                        onPress={(value) => {this.setState({value:value})}}
                        labelStyle={{fontSize: 20, color: '#2ecc71'}}
                        labelWrapStyle={{}}
                    />
                    </RadioButton>
                })}
                </RadioForm>
                {/*}
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                />
                {/*}
                <Picker
                    selectedValue={this.state.color}
                    style={{height: 50, width: 100}}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({color: itemValue})
                }>
                <Picker.Item label="黒" value="黒" />
                <Picker.Item label="白" value="白" />
                <Picker.Item label="銀" value="銀" />
                <Picker.Item label="金" value="金" />
                <Picker.Item label="赤" value="赤" />
                </Picker>
                {/*}
                <TextInput
                    autoFocus={true}
                    onChangeText={(text) => this.onChangeText(text)}
                    style={styles.txtInput}
                    value={this.state.text}
        />*/}
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
    },
    container_radioButton:{
        width:"100%",
        height:60,
        flexDirection:"row",
    },
    txt_radioButton:{

    }
})