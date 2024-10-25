import { StyleSheet} from "react-native";
import { Platform } from "react-native";
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    paddingHorizontal: 20, // Slightly smaller horizontal padding for a balanced look
    paddingBottom: 0, // Padding at the bottom for better spacing
    backgroundColor: '#ff9800', // A more subtle orange shade
    height: 100, // Fixed height for a consistent header
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderBottomWidth: 1, // Subtle bottom border
    borderBottomColor: '#ddd', // Light border color for better distinction
  },
  
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.4)', // Reduced shadow opacity for a softer shadow
    textShadowOffset: { width: 0, height: 2 }, // More natural shadow offset
    textShadowRadius: 4, // Reduced radius for a crisper shadow
    letterSpacing: 0.5, // Slight letter spacing for better readability
  },

  homeButton: {
    padding: 10,
  },
});
export default styles;