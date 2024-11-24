import { useState } from "react";
import { View, Text, StyleSheet, Button, ToastAndroid, Image } from "react-native";
const icon = require("../assets/images/nasgor.png");

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const countPlusHandle = () => {
    setCount(count + 1);
  };

  const countMinusHandle = () => {
    setCount(count - 1);
  };

  const saveHandle = () => {
    setCount(0);
    if (cart + count >= 0) {
      setCart(cart + count);
      ToastAndroid.show("Cart berhasil ditambahkan", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Cart tidak bisa kurang dari 0", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bakul Emak</Text>

      {/* Main */}
      <View style={styles.mainContent}>
        <Image style={styles.image} source={icon} />

        <View style={styles.controlContainer}>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="-" onPress={countMinusHandle} color="#f44336" />
            </View>

            <Text style={styles.countText}>{count}</Text>

            <View style={styles.button}>
              <Button title="+" onPress={countPlusHandle} color="#4CAF50" />
            </View>
          </View>
        </View>
      </View>

      {/* Tombol Save */}
      <View style={styles.saveButton}>
        <Text style={styles.cartText}>Cart: {cart}</Text>
        <Button title="SAVE" onPress={saveHandle} color="#2196F3" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  text :{
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  mainContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 20,
  },
  controlContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  countText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    color: "#555",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button: {
    marginHorizontal: 5,
    width: 60,
  },
  saveButton: {
    position: "absolute", 
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#f5f5f5",
  },
  cartText: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#555",
  }
});
