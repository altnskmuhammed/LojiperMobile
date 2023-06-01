import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  button: {
    width: "80%",
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
  buttonText: {},
  headerTitle: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  dropdownStyle: {
    borderColor: "transparent",
  },
});
