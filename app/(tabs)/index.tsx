import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
//import Slider from '@react-native-community/slider'
import { ModalPontos } from "./components/modal"


let charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789"



export default function index(){
  //const [pontosValue, setPontosValue] = useState("")
  //const [size, setSize] = useState(10) 
  const [modalVisible, setModalVisible] = useState(false)
  




function pontuar(){
  

  setModalVisible(true);
}
  return(

        <View style={styles.container}>
            <Image
            source={require("./assets/logo.png")}
            style={styles.logo}
            />

            <Text style={styles.title}>Escolha o tipo de erro</Text>

           <View style={styles.buttonArea}>
             <TouchableOpacity style={styles.button} onPress = {pontuar}>           
             <Text style={styles.buttonText}>BÁSICO</Text> 
             </TouchableOpacity>
             <TouchableOpacity style={styles.button} onPress ={pontuar}>
             <Text style={styles.buttonText}>MÉDIO</Text> 
             </TouchableOpacity> 
             <TouchableOpacity style={styles.button} onPress={pontuar} >
             <Text style={styles.buttonText}>AVANÇADO</Text>
             </TouchableOpacity>
             </View>
            <Modal visible={modalVisible} animationType='fade' transparent={true}>

            <ModalPontos  handleClose = {() => setModalVisible(false)} />

            </Modal>
            
    </View>    
       
)
}

//estilos novos.

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#008000",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60
  },
  title:{
   
    fontSize: 30,
    fontWeight: 'condensedBold',
    fontStyle: "italic",
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  button:{
    flex: 1,
    backgroundColor:"#8B008B",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 2,
    
  },
  buttonText:{
    color:"#FFF",
    fontSize: 20,
  },
  buttonArea:{
    flexDirection: "row",  
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  }
})