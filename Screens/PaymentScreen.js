import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCVC] = useState("");

  const handlePayment = () => {
    console.log("Card Number:", cardNumber);
    console.log("Expiry Date:", expiryDate);
    console.log("CVC:", cvc);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardTop}>
          <Text style={styles.cardText}>{cardNumber}</Text>
        </View>
        <View style={styles.cardBottom}>
          <Text style={styles.cardText}>{name}</Text>
          <Text style={styles.cardText}>{expiryDate}</Text>
        </View>
        <View style={styles.cardChip}>
          <MaterialCommunityIcons name="credit-card" size={40} color="#fff" />
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Kart Numarası</Text>
          <TextInput
            style={styles.input}
            placeholder="Kart numarasını girin"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ad Soyad</Text>
          <TextInput
            style={styles.input}
            placeholder="Kart numarasını girin"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputRow}>
          <View style={[styles.inputContainer, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>Bitiş Tarihi</Text>
            <TextInput
              style={styles.input}
              placeholder="AA/YY"
              value={expiryDate}
              onChangeText={setExpiryDate}
              keyboardType="numeric"
            />
          </View>
          <View style={[styles.inputContainer, { flex: 1, marginLeft: 8 }]}>
            <Text style={styles.label}>CVC</Text>
            <TextInput
              style={styles.input}
              placeholder="CVC kodunu girin"
              value={cvc}
              onChangeText={setCVC}
              keyboardType="numeric"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Ödeme Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  cardContainer: {
    backgroundColor: "#0047ab",
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 32,
    overflow: "hidden",
    justifyContent: "space-between",
    padding: 16,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginVertical: 15,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  cardChip: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  formContainer: {
    width: "100%",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#003580",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PaymentScreen;
