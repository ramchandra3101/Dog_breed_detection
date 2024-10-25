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
      },
});