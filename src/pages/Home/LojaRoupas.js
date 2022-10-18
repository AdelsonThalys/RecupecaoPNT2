/* eslint-disable jsx-a11y/alt-text */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { FaSearch, FaArrowAltCircleLeft } from "react-icons/fa";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <View style={styles.imagemLogo}>
              <img className="center" src={require("../../assets/logo.png")} />
            </View>
            <Text style={styles.textTitle}>Seleção de Roupas</Text>
          </View>

          <View style={styles.barraPesquisa}>
            <TextInput
              style={styles.barraPesquisaText}
              placeholder="buscar"
            ></TextInput>
            <TouchableOpacity style={styles.searchButton}>
              {" "}
              <FaSearch></FaSearch>{" "}
            </TouchableOpacity>
          </View>

          <View style={styles.botoes}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate("Home")}
            >
              <FaArrowAltCircleLeft
                style={styles.buttonMaisText}
              ></FaArrowAltCircleLeft>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botoesRoupas}>
              <Text style={styles.botoesText}>Roupas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botoesSapatos}
              onPress={() => navigation.navigate("LojaSapatos")}
            >
              <Text style={styles.botoesText}>Sapatos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.produtos}>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img
                className="center"
                src={require("../../assets/roupas/1.jpg")}
                style={styles.imagens}
              />{" "}
              <Text style={styles.produtoText}>Conjunto Praia </Text>{" "}
              <Text style={styles.preço}>R$ 32,00</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img
                className="center"
                src={require("../../assets/roupas/2.jpg")}
                style={styles.imagens}
              />{" "}
              <Text style={styles.produtoText}>Camisa Soft</Text>{" "}
              <Text style={styles.preço}>R$ 45,00</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img
                className="center"
                src={require("../../assets/roupas/3.jpg")}
                style={styles.imagens}
              />{" "}
              <Text style={styles.produtoText}>Saia Burn Book</Text>{" "}
              <Text style={styles.preço}>R$ 50,00</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img
                className="center"
                src={require("../../assets/roupas/4.jpg")}
                style={styles.imagens}
              />{" "}
              <Text style={styles.produtoText}>Cardigâ 2020</Text>{" "}
              <Text style={styles.preço}>R$ 36,00</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img
                className="center"
                src={require("../../assets/roupas/5.jpg")}
                style={styles.imagens}
              />{" "}
              <Text style={styles.produtoText}>Conjunto She </Text>{" "}
              <Text style={styles.preço}>R$ 70,00</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img
                className="center"
                src={require("../../assets/roupas/6.jpg")}
                style={styles.imagens}
              />{" "}
              <Text style={styles.produtoText}>Tardezinha</Text>{" "}
              <Text style={styles.preço}>R$ 56,00</Text>{" "}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  header: {
    position: "absolute",
    top: 0,
    marginStart: 100,
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  botoes: {
    marginTop: 40,
    marginLeft: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  botoesText: {
    fontSize: 30,
    margin: 15,
    marginLeft: 25,
    marginRight: 25,
  },
  text: {
    marginTop: 50,
    marginRight: 50,
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 15,
    marginLeft: 23,
    color: "#6052FF",
  },
  imagens: {
    height: 180,
    resizeMode: "contain",
  },
  imagemLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginLeft: -90,
    marginTop: 15,
  },
  botoesRoupas: {
    backgroundColor: "#6052FF",
    borderRadius: 25,
  },
  searchButton: {
    marginRight: 40,
    marginLeft: -25,
    marginTop: 10,
    color: "#6052FF",
  },
  barraPesquisa: {
    alignSelf: "center",
    width: "85%",
    display: "flex",
    flexDirection: "row",
    //backgroundColor: 'red',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    marginTop: 150,
    fontSize: 25,
    shadowRadius: 10,
    color: "white",
  },
  barraPesquisaText: {
    fontSize: 25,
    padding: 7,
    marginLeft: 16,
  },

  produtos: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  produto: {
    padding: 4,
    height: 220,
    width: 170,
    marginLeft: 20,
    marginTop: 50,
    shadowRadius: 6,
    shadowOpacity: 0.4,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  produtoText: {
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 5,
  },
  preço: {
    alignSelf: "center",
    color: "grey",
  },
  back: {
    marginLeft: -50,
    paddingStart: "5%",
    fontSize: 45,
    padding: 12,
    color: "#6052FF",
  },
});
