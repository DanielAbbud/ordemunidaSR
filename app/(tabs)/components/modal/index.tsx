import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";


export function ModalPontos({handleClose}){
    return(

    <View style={styles.container}>
    <View style={styles.content}>
        
    <Text style={styles.title}>Pontuação definida</Text>
        <Pressable style={styles.pontomarcado}>
            <Text style={styles.text}>Marcar ponto?</Text>
        </Pressable>



        <View style={styles.buttonArea}>

        <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttontext}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleClose}>
            <Text style={styles.buttonSaveText}>Confirmar</Text>
        </TouchableOpacity>   

        </View>
    </View>  


    </View>

    )

}

const styles= StyleSheet.create({

container:{
    backgroundColor: "rgba( 24, 24, 0.6)",
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
},
content:{
    backgroundColor:  "#fafafa",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 8,
},

title:{
    fontSize: 30,
    fontWeight: "heavy",
    color: "#3c0299",
    marginBottom: 24,
},
pontomarcado:{
    backgroundColor: "#ff0303",
    width: "90%",
    padding: 14,
    borderRadius: 8,

},
text:{
    padding: 10,
    color: "#fff",
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 5,
    backgroundColor: 'lighyellow',
    margin: 2,
},
buttonArea:{

  flexDirection: "row",  
  width: "90%",
  marginTop: 8,
  alignItems: 'center',
  justifyContent: 'space-between',
},
button:{
    flex:1,
    alignItems: 'center',
    marginTop: 14,
    marginBottom:14,
    padding: 8,   
},
buttonSave:{
    backgroundColor: "#9e03ff",
    borderRadius: 8,
},
buttonSaveText:{
    color: "#FFF",
    fontWeight: 'bold',
},
buttontext:{
    color: "#0a0a0a",
    fontWeight: 'bold',
}

})