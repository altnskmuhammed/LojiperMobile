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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  backgroundPattern: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    zIndex: -1,
  },
  image: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: 18,
    marginLeft: 95,
    marginBottom: 32,
    color: "#003580", // Başlık rengi
    justifyContent: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 55,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 40,
    borderRadius: 10, // Input kutusu köşeleri yuvarlatılıyor
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 25,
  },
  button: {
    width: "100%",
    backgroundColor: "#003580",
    paddingVertical: 18,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Butona hafif bir gölge ekleniyor
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
