import CameraPick from './CameraPick';
import ImagePicker from './ImagePicker';
import Header from './Header';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Homepagestyles from '../styles/Homepagestyles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={Homepagestyles.safeArea}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#FFF5E1', '#FFDAB9']}
        style={Homepagestyles.gradient}
      >
        <View style={Homepagestyles.main_container}>
          {/* Your custom header */}
          <View style={Homepagestyles.options_container}>
            <CameraPick />
            <ImagePicker />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
