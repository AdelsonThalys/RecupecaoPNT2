import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Pd Days</Text>
      <Text style={styles.message}>Bem vindo de Volta ao pd shop</Text>

      <View style={styles.containerForms}>
        <Text style={styles.title}>E-mail</Text>
        <TextInput style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput style={styles.input} />
      </View>

      <TouchableOpacity style={styles.buttonRegister}>
        <Text style={styles.buttonRegisterText}>
          É novo por aqui? clique aqui e cadastre-se
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Loja")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: "#fff",
    height: "100%",
  },
  logo: {
    alignSelf: "center",
    fontSize: 90,
    marginTop: "30%",
    color: "#6052FF",
    fontWeight: "bold",
    fontFamily: "gliker condensed",
  },
  message: {
    fontSize: 16,
    fontWeight: "bold",
    //color: 'red',
    alignSelf: "center",
    marginTop: "25%",
    marginBottom: "4%",
  },
  containerForms: {
    backgroundColor: "#fff",
    alignSelf: "center",
    width: "80%",
    marginTop: 25,
  },

  title: {
    fontSize: 23,
    marginTop: 17,
  },

  input: {
    borderBottomWidth: 1,
    height: 35,
    marginBottom: 10,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#6052FF",
    width: "80%",
    bottom: "0%",
    borderRadius: 12,
    paddingVertical: 10,
    marginTop: "8%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 25,
  },
  buttonRegister: {
    alignSelf: "center",
    marginTop: "15%",
  },
  buttonRegisterText: {
    fontSize: 14,
  },
});
