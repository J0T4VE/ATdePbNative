import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleEnviar = () => {
    if (nome && email && mensagem) {
      Alert.alert("Contato Enviado", "Obrigado por entrar em contato!");
      setNome("");
      setEmail("");
      setMensagem("");
    } else {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Seu Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textArea}
        placeholder="Sua Mensagem"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
      />
      <Button title="Enviar" onPress={handleEnviar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  heading: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    color: "black",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    backgroundColor: "white",
    color: "black",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    height: 100,
  },
});
