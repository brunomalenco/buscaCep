import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, TextComponent, Keyboard } from 'react-native';
import api from './src/services/api';
import { useRef, useState } from 'react';

export default function App() {

  const [cep, setCep] = useState('')
  const [cepUser, setCepUser] = useState(null)

  const inputRef = useRef(null)

  const limpar = () => {
    setCep('')
    inputRef.current.focus()
  }

  const buscar = async () => {
    if (cep == '') {
      alert("Digite um cep válido")
      return
    }

    try {
      const data = await api.get(`${cep}/json`)
      setCepUser(data.data)
      Keyboard.dismiss()
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: '10%' }}>

        <Text style={styles.texto}>Digite o CEP desejado</Text>
        <TextInput ref={inputRef} style={styles.input} keyboardType='numeric' placeholder='Ex: 63021000' value={cep} onChangeText={(texto) => setCep(texto)} />

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: '10%' }}>

        <TouchableOpacity onPress={buscar} style={styles.btnBusca}>
          <Text style={{ color: 'white', fontSize: 20 }}>Pesquisar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={limpar} style={styles.btnLimpa}>
          <Text style={{ color: 'white', fontSize: 20 }}>Limpar</Text>
        </TouchableOpacity>
      </View>


      {
        cepUser &&
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {cepUser.logradouro} </Text>
          <Text style={styles.itemText}>Bairro: {cepUser.bairro} </Text>
          <Text style={styles.itemText}>Cidade: {cepUser.localidade} </Text>
          <Text style={styles.itemText}>Estado:  {cepUser.uf}</Text>
        </View>
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    marginBottom: '8%',
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
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
  itemText: {
    fontSize: 22
  },
  btnBusca: {
    backgroundColor: 'blue',
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  btnLimpa: {
    backgroundColor: 'red',
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
});
