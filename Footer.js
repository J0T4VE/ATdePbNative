import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        © 2024 Minha Plataforma de Filmes. Todos os direitos reservados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282c34",
    padding: 10,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 12,
  },
});
