import React,{ Component } from "react"
import{
  View,
  SafeAreaView,
  Platform,
} from "react-native"
import { Avatar } from 'react-native-elements';
import { connectActionSheet } from '@expo/react-native-action-sheet'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

//props
/*
  parent 
*/
class InputImageComponent extends Component {

  constructor(props){
    super(props)
    this.state = this.props.parent.state
  }

  updateImage(uri){
    this.setState({imageURI:uri})
  }

  async pickImage(){
    //permission
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return
      }
    }

    //photo library を開く
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      this.updateImage(result.uri)
    }
  }

  openActionSheet(){
    // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
    const options = ['Take photo ...', 'Choose from Library ...', 'Cancel'];
    const cancelButtonIndex = 2;

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        // Do something here depending on the button index selected
        if(buttonIndex==0){
          //take photo
          let parent = this.props.parent
          console.log(parent.props)
          parent.props.navigation.navigate("Camera",{update:this.updateImage.bind(this)})
        }else if(buttonIndex==1){
          //photo library
          this.pickImage()
        }
      },
    );
  }

  render(){
    return(
      <View style={{height:100,alignItems:"center"}}>
        <Avatar
          size="medium"
          //title="画像"
          onPress={() => this.openActionSheet()}
          source={{uri: this.state.imageURI}}
          showEditButton
        />
      </View>
    )
  }
}

const ConnectedApp = connectActionSheet(InputImageComponent)
export default ConnectedApp