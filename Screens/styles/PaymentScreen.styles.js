import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
