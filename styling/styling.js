import { StyleSheet} from 'react-native';

export const appStyling = StyleSheet.create({
  container:{
    flex:1
    // marginTop: 200
  }
})

export const locationStyling = StyleSheet.create({
    fullContainer:{
      flex: 2
    },
    infoContainer: {
      flex: 1,
      marginTop: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    images:{
      flex: 1,
      width: 300,
      height: 300,
    },
    text:{
      flex:1,
      textAlign:'center',
      fontSize: 20,
      marginBottom: 10
    },
    textInput:{
      flex: 1,
      height: 80,
      width: 300,
      borderColor: "black",
      borderWidth: 2,
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 10
    },
    textTitle:{
      // flex: 1,
      fontSize:25,
      fontWeight:'bold',
      textAlign: 'center'
    },
    button:{
      flex: 1,
      flexDirection:'column',
      marginTop: 15
    },
    commentSection:{
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      marginBottom: 20,
      height: 500,
      borderColor: 'black',
      borderWidth: 1
      // backgroundColor: 'black'
    },
    comments:{
      flex:1,
      borderColor: 'black',
      borderBottomWidth: 1,
      marginTop: 10,
      fontSize:15
    }
  });
  