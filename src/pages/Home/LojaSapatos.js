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
            <TouchableOpacity
              style={styles.botoesRoupas}
              onPress={() => navigation.navigate("LojaRoupas")}
            >
              <Text style={styles.botoesText}>Roupas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botoesSapatos}>
              <Text style={styles.botoesText}>Sapatos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.produtos}>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img className="center" src={require("../../assets/1.png")} />{" "}
              <Text style={styles.produtoText}>Mizuno Wave </Text>{" "}
              <Text style={styles.preço}>R$ 96,00</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img className="center" src={require("../../assets/2.png")} />{" "}
              <Text style={styles.produtoText}>R$</Text>{" "}
              <Text style={styles.preço}>R$ 85,00</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img className="center" src={require("../../assets/3.png")} />{" "}
              <Text style={styles.produtoText}>R$</Text>{" "}
              <Text style={styles.preço}>R$ 199,00</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img className="center" src={require("../../assets/4.png")} />{" "}
              <Text style={styles.produtoText}>Empyre</Text>{" "}
              <Text style={styles.preço}>R$ 299,99</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img className="center" src={require("../../assets/5.png")} />{" "}
              <Text style={styles.produtoText}>Botinha Olk </Text>{" "}
              <Text style={styles.preço}>R$ 96,00</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img className="center" src={require("../../assets/6.png")} />{" "}
              <Text style={styles.produtoText}>R$</Text>{" "}
              <Text style={styles.preço}>R$ 399,99</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img className="center" src={require("../../assets/7.png")} />{" "}
              <Text style={styles.produtoText}>Nike Infantil</Text>{" "}
              <Text style={styles.preço}>R$ 49,99</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img className="center" src={require("../../assets/8.png")} />{" "}
              <Text style={styles.produtoText}>R$</Text>{" "}
              <Text style={styles.preço}>R$ 199,00</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img className="center" src={require("../../assets/9.png")} />{" "}
              <Text style={styles.produtoText}>R$</Text>{" "}
              <Text style={styles.preço}>R$ 279,99</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img className="center" src={require("../../assets/10.png")} />{" "}
              <Text style={styles.produtoText}>Nike Shox...</Text>{" "}
              <Text style={styles.preço}>R$ 99,99</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img className="center" src={require("../../assets/11.png")} />{" "}
              <Text style={styles.produtoText}>Nike Shox... </Text>{" "}
              <Text style={styles.preço}>R$ 499,99</Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.produto}
              onPress={() => navigation.navigate("Reserva")}
            >
              <img className="center" src={require("../../assets/12.png")} />{" "}
              <Text style={styles.produtoText}>Adidas Neo</Text>{" "}
              <Text style={styles.preço}>R$ 159, 99</Text>{" "}
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
  imagemLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginLeft: -90,
    marginTop: 15,
  },
  botoesSapatos: {
    backgroundColor: "#6052FF",
    borderRadius: 25,
  },
  botoesRoupas: {
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
