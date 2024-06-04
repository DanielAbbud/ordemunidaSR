import { View, Text, StyleSheet, Image } from "react-native"


export default function index(){
    return(

        <View style={styles.container}>
            <Image
            source={require("./assets/logo.png")}
            />
    </View>    
       
)
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#6495ED",
    justifyContent: 'center',
    alignItems: 'center'
  }
})