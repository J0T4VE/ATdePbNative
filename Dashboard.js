import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Footer from "./Footer";

export default function Dashboard() {
  const avaliacoes = [
    { filme: "Batman Begins", quantidade: 5 },
    { filme: "The Dark Knight", quantidade: 8 },
    { filme: "The Dark Knight Rises", quantidade: 3 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard de Avaliações</Text>
      <Text style={styles.total}>Total de Avaliações: 16</Text>
      {avaliacoes.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.filme}>{item.filme}</Text>
          <Text style={styles.quantidade}>{item.quantidade}</Text>
        </View>
      ))}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    padding: 20,
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  total: {
    color: "#ccc",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  filme: {
    color: "#fff",
    fontSize: 16,
  },
  quantidade: {
    color: "#ccc",
    fontSize: 16,
  },
});
