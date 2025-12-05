import { useState } from "react";
import { Keyboard, SafeAreaView, View, StyleSheet, Text, TextInput, ActivityIndicator } from "react-native";
import { FokusButton } from "../components/FokusButton";

export default function ViaCep() {
  // CEP
  // ENDERECO
  // CARREGAR
  // ERRO
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const buscarCep = async () => {
    Keyboard.dismiss(); // => Fecha o teclado quando inicia a busca.

    setEndereco(null);
    setLoading(false);
    setErro("");

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErro("CEP não encontrado ou inválido!");
      } else {
        setEndereco(data);
      }
    } catch (error) {
      setErro("Falha ao buscar. Verifique sua conexão.")
    }    
  }
  const limparResultado = () => {
      setCep('');
      setEndereco(null);
      setErro(null);
    }
  return (

    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Buscador de Endereço
        </Text>
        <TextInput
          placeholder="Digite o CEP:"
          placeholderTextColor="#98A0A8"
          value={cep}
          onChangeText={setCep}
          maxLength={8}
          keyboardType="numeric"
          style={styles.input}
        />
        <FokusButton
          title={loading ? 'Buscando' : 'Buscar CEP'}
          onPress={buscarCep}
          disabled={loading}
        />

        <View style={styles.result}>
          {loading && <ActivityIndicator size='large' color="#FFF" />}
          {erro && <Text style={styles.error}>{erro}</Text>}

          {endereco && (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Endereço Encontrado</Text>
              <Text style={styles.cardText}>Logradouro: {endereco.logradouro}</Text>
              <Text style={styles.cardText}>Bairro: {endereco.bairro}</Text>
              <Text style={styles.cardText}>Cidade: {endereco.localidade}</Text>
              <Text style={styles.cardText}>UF: : {endereco.uf}</Text>
              <Text style={styles.cardText}>DDD: {endereco.ddd}</Text>
            </View>
          )}
        </View>
          {(endereco || erro) && (
            <FokusButton title="Limpar resultado" onPress={limparResultado}/>
          )  }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#021123',
  },
  container: {
    flex: 1,
    padding: 28,
    alignContent: 'center',
    gap: 18,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#0E253F',
    borderColor: '#294763',
    borderRadius: 10,
    color: '#FFF',
    paddingHorizontal: 16,
    fontSize: 17,
    borderWidth: 1,
  },
  result: {
    width: '100%',
    marginTop: 14,
  },
  error: {
    color: '#FF7A7A',
    textAlign: 'center',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#0E253F',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#294763',
    gap: 4,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardText: {
    color: '#D6E4F0',
    fontSize: 16,
  },
})