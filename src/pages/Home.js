import react, {useState, useEffect} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

export default function Home(){

    //programar botão adicionar
    let[novoFilme, setNovoFilme] = useState({})

    //criando saudação do usuário
    let[saudacao, setSaudacao] = useState('');

    useState(() =>{
        //aqui
        let horaAtual = new Date().getHours;

        if (horaAtual < 12) {
            setSaudacao('Bom dia')
            
        } else if (horaAtual > 12) {
            setSaudacao('Bom tarde')

        } else {
            
        }{
            setSaudacao('Bom noite')

        }

    }, []);

Array

//Criando Array de filmes
//filmes e listando

let [filmes, setFilmes] = useState([
{
    'id' : 1,
    'nome' : 'Titanic'
},

{
    'id' : 2,
    'nome' : 'Guardiões da galaxia'
},

{
    'id' : 3,
    'nome' : 'Sonic'
},

{
    'id' : 4,
    'nome' : 'Ponio'
},

{
    'id' : 5,
    'nome' : 'Homem Aranha'
}

]);

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Meus filmes</Text>
            <Text style={styles.subtitulo}>Olá Thiago, {useState.horaAtual}</Text>

            <TextInput style={styles.campo} placeholder="Nome do Filme"/>
            
            <TouchableOpacity style={styles.button}>
                <Text>Adicionar</Text>
            </TouchableOpacity>

            <FlatList
              data={filmes}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                  <view>
                  <TouchableOpacity style={styles.buttonFilme}>
                <Text style={styles.textFilme}>{item.id} {item.nome}</Text>
            </TouchableOpacity>
                  </view>

              )}
            />
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
    color: '#3f1d'
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
buttonFilme:{
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 15
},
textFilme:{
   color: '#fff',
   fontSize: 22,
   fontWeight: 'bold'
}
}); //Fim dos estilos