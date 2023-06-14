import { StyleSheet, Text, TextInput ,View ,TouchableOpacity, SafeAreaView, TextComponent } from 'react-native';
import api from './src/services/api';
import { useState } from 'react';

export default function App() {
  
  const [cep, setCep] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center', marginTop: '10%'}}>

        <Text style={styles.texto}>Digite o CEP desejado</Text>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='Ex: 63021000' value={cep} onChangeText={(texto) => setCep(texto)}/>

      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: '10%'}}>
        <TouchableOpacity>
          <Text>Pesquisar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: </Text>
        <Text style={styles.itemText}>Logradouro: </Text>
        <Text style={styles.itemText}>Bairro: </Text>
        <Text style={styles.itemText}>Cidade: </Text>
        <Text style={styles.itemText}>Estado: </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto:{
    marginBottom: '8%',
    fontSize: 25,
    fontWeight: 'bold'
  },
  input:{
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: '20%',
  },
  itemText:{
    fontSize: 22
  }
});
