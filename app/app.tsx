import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/Homescreen';
import Imagedisplay from '../components/Imagedisplay';
import Header from '../components/Header';

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  ImageDisplay: { imageURI: string };
};

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => <Header />, // Custom Header for Home screen
          }}
        />
        {/* ImageDisplay screen */}
        <Stack.Screen
          name="ImageDisplay"
          component={Imagedisplay}
          options={{
            header: () => <Header />, // Custom Header for ImageDisplay screen
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
