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
    marginTop: 10,
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
  buttonRegister: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 18,
    borderColor: "#003580",
    borderRadius: 10,
    marginTop: 10,
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
    elevation: 5, // Butona hafif b
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
  buttonText2: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
