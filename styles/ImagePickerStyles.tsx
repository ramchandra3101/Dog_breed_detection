import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { // Using hex code for better consistency (orange)
    flexDirection: 'row',
    padding: 25, // Slightly more padding for better spacing
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 20, // Simplified marginLeft and marginRight with marginHorizontal
    borderRadius: 15, // More rounded corners for modern look
    width: '90%', // Same width but centered
    alignSelf: 'center', // Center the box horizontally
    shadowColor: '#000', // Improved shadow settings
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, // Increased shadow opacity for better depth
    backgroundColor: '#FFCD9B'
 
  },
  subcontainer: {
  alignItems: 'flex-start',// Center the content
  flex:1
  },
  button: {
    backgroundColor: '#ff4500', // A darker orange for the button to contrast with the container
    borderRadius: 25, 
    height: 50, 
    width: '60%', // Make the button take 80% of the container's width
    justifyContent: 'center', 
    marginTop: 20, // Slightly more margin for spacing
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // For a subtle shadow on Android
  },
  errortext: {
    color: 'red',
    fontSize: 16,
    marginTop: 15,
    fontWeight: '500', // Medium weight for error text
  },
  icon: {
    width: 100, // Slightly smaller icon
    height: 100, 
    marginBottom: 15, // Add margin bottom for spacing between icon and button text
    borderRadius: 100, // Circular icon
    backgroundColor: '#fff', // Optional: Background color for the icon
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensure the image stays within the circular icon
  },
  buttontext: {
    color: '#FFFFFF', // White text color for good contrast
    fontSize: 18, // Slightly smaller text for better readability
    fontWeight: 'bold', 
    textAlign: 'center',
    letterSpacing: 1, // Adds slight spacing between letters for a more polished look
  },
});
