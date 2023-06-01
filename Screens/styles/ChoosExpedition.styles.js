import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: "row",
    marginLeft: 40,
  },
  headerTitle: {
    marginLeft: 8,
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "white",
  },
  dropdownStyle: {
    borderColor: "transparent",
  },
  container: {
    flex: 1,
    backgroundColor: "#ededed",
  },
  item: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,

    padding: 15,
    marginVertical: 10,
    marginHorizontal: 16,
    paddingVertical: 25,
  },
  title: {
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: 65,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});
