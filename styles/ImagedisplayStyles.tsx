import { StyleSheet } from "react-native";
export default StyleSheet.create({
    Page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
      },
      Box: {
        width: 300,
        height: 300,
        borderWidth: 2,
        borderColor: '#3b5998',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      InBox: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
     Button: {
        padding: 15,
        backgroundColor: '#3b5998',
        borderRadius: 8,
        alignItems: 'center',
      },
     ButtonText: {
        fontSize: 18,
        color: '#fff',
      },
      ResultText: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: "600", // Makes the text semi-bold for better emphasis
        color: "#333333", // Dark gray for better readability
        backgroundColor: "#f2f2f2", // Light background to create contrast
        padding: 10, // Adds spacing around the text
        borderRadius: 8, // Rounds the corners for a softer look
        textAlign: "center", // Centers the text for uniform display
        // shadowColor: "#000", // Adds shadow for depth
        // shadowOffset: { width: 0, height: 2 }, // Horizontal and vertical shadow offset
        // shadowOpacity: 0.2, // Opacity of the shadow
        // shadowRadius: 3, // Blur radius of the shadow
        // elevation: 3, // Shadow effect for Android
        }
      
});