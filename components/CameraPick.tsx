import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import CamerapickerStyles from '../styles/CamerapickerStyles';

type RootStackParamList = {
  ImageDisplay: { imageURI: string };
};

export default function CameraPick() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [error, setError] = useState<string | null>(null);
  

  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status!== 'granted') {
        Alert.alert('Permission required', 'We need camera permissions to topen camera.');
        return;
      }

      const image = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // Square image
        quality: 1,
      });
      if (image.canceled) {
        setError('No Image captured');
        return;
      }

      if (image.assets[0].uri) {
        navigation.navigate('ImageDisplay', { imageURI: image.assets[0].uri });
        setError(null);
      }
    } catch (error) {
      setError('An error occurred while capturing an image');
    }
  };

  return (
    <View style={CamerapickerStyles.container}>
      <View style={CamerapickerStyles.subcontainer}>
        <Image style={CamerapickerStyles.icon} source={require('../assets/images/camera.png')} />
        </View>
        <TouchableOpacity style={CamerapickerStyles.button} onPress={pickImage}>
          <Text style={CamerapickerStyles.buttontext}>Open Camera</Text>
        </TouchableOpacity>
        {error && <Text style={CamerapickerStyles.errortext}>{error}</Text>} 
  </View>
  )
    
}