import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Correct import to get current route
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../styles/Headerstyles';

export default function Header() {
  const navigation = useNavigation(); // For navigation
  const route = useRoute(); // To get the current route name

  // Handle the press of the Home button
  const handleHomePress = () => {
    Alert.alert(
      'Discard Changes?',
      'Are you sure you want to discard all changes and go back to the home screen?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Home' as never);
          },
        },
      ]
    );
  };

  // Check if the current route is the home screen
  const isHomeScreen = route.name === 'Home';

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Dog Breed Detection</Text>

      {/* Show the Home button only when not on the Home screen */}
      {!isHomeScreen && (
        <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
          <MaterialCommunityIcons name="home" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}
