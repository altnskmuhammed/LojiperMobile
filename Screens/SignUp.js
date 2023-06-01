import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Input from "../components/Input";
import { styles } from "./styles/SingUp.styles";

const SignUp = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [ıd, setId] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function Login() {
    console.log(email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.trim(), password.trim())
      .then(() => {
        // Signed in
        navigation.navigate("SingIn");
        // ...
      })
      .catch((error) => {
        alert("eksik bilgi");
        // ..
      });
  }
  console.log(email, password);

  const handleChangeInput = (input, type) => {
    if (type == "Ad") {
      setName(input);
    } else if (type == "Soyad") {
      setSurname(input);
    } else if (type == "Email") {
      setEmail(input);
    } else if (type == "Tc") {
      setId(input);
    } else if (type == "Parola") {
      setPassword(input);
    } else if (type == "Parola Tekrar") {
      setPassword2(input);
    }
  };

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
          <Feather name="user" size={20} color="gray" style={styles.icon} />
        }
        title={"Ad"}
        onChangeInput={handleChangeInput}
      />
      <Input
        ıcon={
          <Feather name="user" size={20} color="gray" style={styles.icon} />
        }
        title={"Soyad"}
        onChangeInput={handleChangeInput}
      />

      <Input
        ıcon={
          <Feather name="mail" size={20} color="gray" style={styles.icon} />
        }
        title={"Email"}
        onChangeInput={handleChangeInput}
      />
      <Input
        ıcon={
          <Feather name="user" size={20} color="gray" style={styles.icon} />
        }
        title={"Tc"}
        onChangeInput={handleChangeInput}
      />
      <Input
        ıcon={
          <Feather name="lock" size={20} color="gray" style={styles.icon} />
        }
        title={"Parola"}
        onChangeInput={handleChangeInput}
      />

      <Input
        ıcon={
          <Feather name="lock" size={20} color="gray" style={styles.icon} />
        }
        title={"Parola Tekrar"}
        onChangeInput={handleChangeInput}
      />
      <TouchableOpacity style={styles.button} onPress={Login}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
