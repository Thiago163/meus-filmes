import react from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
    return(
        <View>
            <Text>meus filmes</Text>
            <Text>OLÁ THIAGO, BOA NOITE</Text>
            
            <TouchableOpacity>
                <Text>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}

//criando estilos

const styles = StyleSheet.create({

})