import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles/PaymentScreen.styles";

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

export default PaymentScreen;
