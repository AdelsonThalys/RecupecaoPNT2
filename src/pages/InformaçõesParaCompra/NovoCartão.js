import {
  FaArrowAltCircleLeft,
  FaLocationArrow,
  FaCreditCard,
  FaHome,
  FaBell,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate("Home")}
      >
        <FaArrowAltCircleLeft
          style={styles.buttonMaisText}
        ></FaArrowAltCircleLeft>
      </TouchableOpacity>

      <Text style={styles.textoDeCima}>Endereço de Entrega</Text>

      <View style={styles.containerseleção}>
        <TouchableOpacity
          style={styles.lotaion}
          onPress={() => navigation.navigate("Reserva")}
        >
          <FaLocationArrow style={styles.locationText}></FaLocationArrow>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartão}>
          <FaCreditCard style={styles.cartãoText}></FaCreditCard>
        </TouchableOpacity>
      </View>

      <View style={styles.square}>
        <TouchableOpacity style={styles.buttonMais}>
          <FaHome style={styles.buttonBottomMenu1}></FaHome>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMais}>
          <FaBell style={styles.buttonBottomMenu2}></FaBell>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMais}>
          <FaShoppingCart style={styles.buttonBottomMenu3}></FaShoppingCart>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMais}>
          <FaCog style={styles.buttonBottomMenu4}></FaCog>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: "#8470FF",
    marginTop: 25,
    width: "80%",
    alignSelf: "center",
    borderRadius: 28,
    height: 60,
    paddingStart: "5%",
    fontSize: 25,
    opacity: 0.9,
  },
  textoDeCima: {
    color: "purple",
    paddingLeft: "20%",
    paddingBottom: 40,
    fontSize: 30,
    paddingTop: 12,
  },

  buttonMais: {
    alignSelf: "center",
    //backgroundColor: '#6052FF',
    fontSize: 45,
    borderRadius: 50,
    bottom: "-5%",
    padding: 10,
  },
  buttonMaisText: {},
  back: {
    position: "absolute",
    paddingStart: "5%",
    fontSize: 45,
    padding: 12,
    color: "#6052FF",
  },
  locationText: {
    marginRight: 40,

    padding: 12,
    color: "grey",
    fontSize: 70,
  },
  cartãoText: {
    marginLeft: 40,
    padding: 12,
    paddingLeft: 10,
    color: "#6052FF",
    fontSize: 70,
  },
  containerseleção: {
    alignSelf: "center",
    paddingRight: 280,
    paddingLeft: 280,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    //flexWrap:'wrap',
    justifyContent: "center",
  },
  square: {
    bottom: "-235%",
    width: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#836FFF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  buttonBottomMenu1: {
    color: "#483D8B",
    paddingRight: 15,
  },
  buttonBottomMenu2: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonBottomMenu3: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonBottomMenu4: {
    paddingLeft: 15,
  },
});
