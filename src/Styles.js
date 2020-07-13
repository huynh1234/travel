import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headstore:{
      marginTop: 4,
      marginBottom: 8,
      width: "100%",
      // height: 80,
      padding: 4,
      // backgroundColor: "#ddd",
      flexDirection: "row",
    },
    headList:{
      marginTop: 4,
      marginBottom: 8,
      width: "100%",
      // height: 80,
      padding: 4,
      backgroundColor: "#fff",
      flexDirection: "row",
    },
    img:{
      
      height: 220,
      width: 320,
      margin: 4,
      borderRadius: 8,
    },
    avtstore: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: "blue",
      overflow: "hidden"
    },
    avtList:{
      width: 64,
      height: 64,
      borderRadius: 8,
      backgroundColor: "blue",
      overflow: "hidden"
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    comments:{
      width: "100%",
      // height: 200,
      paddingTop: 12,
      margin:4,
      paddingBottom: 8,
      marginLeft: 16
    }
});
export default styles;