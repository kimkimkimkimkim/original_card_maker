import React from 'react';
import { Text, View, TouchableOpacity,SafeAreaView } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

import { Icon } from 'react-native-elements';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  // 撮影
  async takePicture() {
    if(this.camera){
      let pictureData = await this.camera.takePictureAsync();
      //画像をカメラロールに保存
      //CameraRoll.saveToCameraRoll(pictureData.uri);
      //console.log(pictureData)
      //this.camera._onPictureSaved({data:pictureData,id:1});
      console.log("picureData:",pictureData)
      this.props.navigation.state.params.update(pictureData.uri)
      this.props.navigation.navigate("Input")
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
            style={{ flex: 1 }} 
            type={this.state.type}
            ref={ref => { this.camera = ref;}}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                marginTop:55,
                marginRight:15,
                marginLeft:15,
                marginBottom:50,
              }}>
              <View style={{flex:1}}/>
              <View 
                style={{
                  flexDirection:"row",
                }}
              >
              <View style={{flex:1,alignItems:"center"}}></View>
              <View style={{flex:1,alignItems:"center"}}>
                <TouchableOpacity
                  style={{
                    //flex: 1,
                    alignSelf: 'center',
                  }}
                  onPress={() => {
                    this.takePicture();
                  }}
                >
                  <Icon
                    name="camera"
                    size={70}
                    style={{ marginBottom: 20 }}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              <View style={{
                flex:1,alignItems:"flex-end",
                paddingTop:20,
              }}>
                <TouchableOpacity
                  style={{
                    //justifyContent:"center",
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}
                > 
                  <Icon
                    name="repeat"
                    size={30}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              </View>
            </View>
          </Camera>
        </View>
      );
    }
  }
}