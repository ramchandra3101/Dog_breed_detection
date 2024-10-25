import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePick from 'expo-image-picker';
import { useState,  } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import Imagepickerstyles from '../styles/ImagePickerStyles'; // Correct import

type RootStackParamList = {
  ImageDisplay: { imageURI: string };
};
export default function ImagePicker() { // Renamed to avoid confusion with "ImagePicker" from expo
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [error, setError] = useState<string | null>(null);
  



  const pickImage = async () => {
    try {
      const { status } = await ImagePick.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'We need Library permissions to access your photos.');
        return;
      }

      const image = await ImagePick.launchImageLibraryAsync({
        mediaTypes: ImagePick.MediaTypeOptions.Images,
        quality: 1,
      });
      
      if (image.canceled) {
        setError('No Image Selected');
        return;
      }
     

      if (image.assets[0].uri) {
        navigation.navigate('ImageDisplay', { imageURI: image.assets[0].uri });
        setError(null);
      }

    } catch (error) {
      setError('An error occurred while selecting an image');
    }
  };

  return (
    <View style={Imagepickerstyles.container}>
      <View style={Imagepickerstyles.subcontainer}>
        <Image style={Imagepickerstyles.icon} source={require('../assets/images/askphoto.png')} />
      </View>
      <TouchableOpacity style={Imagepickerstyles.button} onPress={pickImage}>
        <Text style={Imagepickerstyles.buttontext}>Select Image</Text>
      </TouchableOpacity>
      {error && <Text style={Imagepickerstyles.errortext}>{error}</Text>}
    </View>
  );
}


