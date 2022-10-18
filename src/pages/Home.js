/* eslint-disable jsx-a11y/alt-text */
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containeLogo}>
        <img className="center" src={require("../assets/logo.png")} />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>
          a melhores roupas de recife e região metropolitana
        </Text>
        <Text style={styles.text}>faça login para começar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}> Entrar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "",
  },
  containeLogo: {
    flex: 2,
    paddingTop: "15%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    //paddingVertical: '65%',
    paddingBottom: "15%",
    width: "100%",
  },
  containerForm: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    paddingBottom: "100%",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    paddingStart: "5%",
  },
  text: {
    position: "absolute",
    color: "#a1a1a1",
    bottom: "51%",
    alignSelf: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "#6052FF",
    bottom: "35%",
    borderRadius: 50,
    paddingVertical: 12,
    width: "70%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
