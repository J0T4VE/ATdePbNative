import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import Footer from "./Footer";

export default function DetalheFilme({ route }) {
  const { filme } = route.params;
  const [detalhes, setDetalhes] = useState(null);
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [novaAvaliacao, setNovaAvaliacao] = useState("");

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=34dbe016&i=${filme.imdbID}`)
      .then((response) => response.json())
      .then((data) => setDetalhes(data))
      .catch((error) => console.error(error));
  }, [filme]);

  const handleEnviarAvaliacao = () => {
    if (novaAvaliacao.trim()) {
      setAvaliacoes([...avaliacoes, novaAvaliacao]);
      setNovaAvaliacao("");
    }
  };

  if (!detalhes) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: detalhes.Poster }} style={styles.poster} />
      <Text style={styles.title}>{detalhes.Title}</Text>
      <Text style={styles.plot}>{detalhes.Plot}</Text>
      <Text style={styles.subtitle}>{`Ano: ${detalhes.Year}`}</Text>
      <Text style={styles.subtitle}>{`Avaliação: ${detalhes.imdbRating}`}</Text>

      <View style={styles.avaliacoes}>
        <Text style={styles.heading}>Avaliações dos Usuários</Text>
        {avaliacoes.length === 0 ? (
          <Text style={styles.noAvaliacoes}>Seja o primeiro a avaliar este filme!</Text>
        ) : (
          avaliacoes.map((avaliacao, index) => (
            <Text key={index} style={styles.avaliacao}>
              {avaliacao}
            </Text>
          ))
        )}
        <TextInput
          style={styles.input}
          placeholder="Deixe sua avaliação..."
          value={novaAvaliacao}
          onChangeText={setNovaAvaliacao}
        />
        <Button title="Enviar Avaliação" onPress={handleEnviarAvaliacao} />
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#1e1e1e",
    padding: 20,
  },
  poster: {
    height: 300,
    width: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  plot: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 16,
    marginTop: 5,
  },
  avaliacoes: {
    marginTop: 20,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
  },
  heading: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  noAvaliacoes: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 10,
  },
  avaliacao: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
