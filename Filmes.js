import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";

export default function Filmes({ navigation, setIsAutenticado }) {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=34dbe016&s=batman")
      .then((response) => response.json())
      .then((data) => setFilmes(data.Search || []))
      .catch((error) => console.error(error));
  }, []);

  const renderFilme = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("DetalheFilme", { filme: item })}
    >
      <Image source={{ uri: item.Poster }} style={styles.poster} />
      <Text style={styles.title}>{item.Title}</Text>
      <Text style={styles.subtitle}>{item.Year}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Minha Plataforma de Filmes</Text>
        <View style={styles.buttons}>
          <Button title="Home" onPress={() => navigation.navigate("Home")} />
          <Button title="Filmes" onPress={() => navigation.navigate("Filmes")} />
          <Button title="Contato" onPress={() => navigation.navigate("Contato")} />
          <Button title="Sair" onPress={() => setIsAutenticado(false)} />
        </View>
      </View>
      <FlatList
        data={filmes}
        renderItem={renderFilme}
        keyExtractor={(item) => item.imdbID}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
  heading: {
    color: "#fff",
    fontSize: 24,
  },
  list: {
    alignItems: "center",
  },
  card: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: "90%",
  },
  poster: {
    height: 200,
    borderRadius: 8,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 5,
  },
});
