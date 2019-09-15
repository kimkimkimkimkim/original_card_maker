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

//props.navigation.state.params
/*
    key <= 何のパラメーターか（例：cardName,textColor,,,
    value <= そのパラメーターの値
    update <= (key,value) setStateしてくれる
*/

export default class PendulumScreen extends Component {

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
          title:"ペンデュラム"
        };
    };

    constructor(props){
        super(props)
        this.state = {
            text:""
        }
    }

    componentDidMount(){
        this.setState({
            text:this.props.navigation.getParam("value","")
        })
    }

    onChangeText(text){
        this.setState({
            text:text
        })
    }

    save(){
        let params = this.props.navigation.state.params
        params.update(params.key,this.state.text) //表示するテキストを保存する
        this.props.navigation.navigate("Create")
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    autoFocus={true}
                    onChangeText={(text) => this.onChangeText(text)}
                    style={styles.txtInput}
                    value={this.state.text}
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