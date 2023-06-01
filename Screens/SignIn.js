import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/Input";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { styles } from "./styles/SingIn.styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleChangeInput = (input, type) => {
    if (type == "Email") {
      setEmail(input);
    } else if (type == "Parola") {
      setPassword(input);
    }
  };

  function Login() {
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email.trim(), password.trim())
      .then(() => {
        navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        alert("Kullanıcı adı veya şifre yanlış");
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.backgroundPattern} />

      <View style={styles.image}>
        <Image
          style={{ width: 260, height: 120 }}
          source={require("../assets/lojiper.png")}
          resizeMode="contain"
        />
      </View>

      <Input
        ıcon={
          <Feather name="mail" size={20} color="gray" style={styles.icon} />
        }
        title={"Email"}
        onChangeInput={handleChangeInput}
      />

      <Input
        ıcon={
          <Feather name="lock" size={20} color="gray" style={styles.icon} />
        }
        title={"Parola"}
        onChangeInput={handleChangeInput}
      />
      <View style={{ flexDirection: "column", gap: 30, width: "100%" }}>
        <TouchableOpacity style={styles.button} onPress={Login}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "grey" }}>Hesabınız yok mu?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SingUp")}>
            <Text style={styles.buttonText2}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
