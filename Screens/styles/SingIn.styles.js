import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
