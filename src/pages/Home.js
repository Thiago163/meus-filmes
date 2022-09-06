import react from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Meus filmes</Text>
            <Text style={styles.subtitulo}>OLÁ THIAGO, BOA NOITE</Text>

            <TextInput style={styles.campo} placeholder="Nome do Filme"/>
            
            <TouchableOpacity style={styles.button}>
                <Text>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}

//criando estilos

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#30478c',
    paddingVertical:70,
    paddingHorizontal:20
},
titulo:{
    fontSize:48,
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 10,
    color: '#fff'
},
subtitulo:{
    color: '#fff',
    fontSize: 15
},
campo:{
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    marginTop: 30,
    borderRadius: 7,
    padding: 15
},
greetings:{
    color: '#fff'
},
button:{
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
},
buttonText:{
color: '#fff',
fontSize: 17,
fontWeight: 'bold'
},
}); //Fim dos estilos