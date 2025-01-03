import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Filmes from "./Filmes";
import DetalheFilme from "./DetalheFilme";
import Contato from "./Contato";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAutenticado, setIsAutenticado] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true, 
          headerStyle: {
            backgroundColor: "#333",
          },
          headerTintColor: "#fff", 
          headerTitleAlign: "center",
        }}
      >
        {!isAutenticado ? (
          <Stack.Screen
            name="Login"
            component={Login}
            initialParams={{ setIsAutenticado }}
            options={{
              title: "Login",
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={Filmes}
              options={{
                title: "Home", 
                headerRight: () => (
                  <Button
                    title="Sair"
                    onPress={() => setIsAutenticado(false)}
                    color="#fff"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Filmes" 
              component={Dashboard}
              options={{
                title: "Dashboard de Avaliações",
              }}
            />
            <Stack.Screen
              name="DetalheFilme"
              component={DetalheFilme}
              options={{
                title: "Detalhes do Filme",
              }}
            />
            <Stack.Screen
              name="Contato"
              component={Contato}
              options={{
                title: "Contato",
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}