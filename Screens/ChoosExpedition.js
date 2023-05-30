import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Image,
  Platform,
} from "react-native";
import React, { useLayoutEffect, useState, useMemo } from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const booking = [
  {
    id: "1",
    fromCity: "Elazığ",
    toCity: "Malatya",
    companyName: "Kamil Koç",
    startDate: "2023/12/13",
    time: "16:00",
    chairs: "23",
    price: "190",
    companyImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0lz-eyE4FPKE0xOFEqyiqBySNhkit0ZdIxu77nZi9&s",
  },
  {
    id: "2",
    fromCity: "Elazığ",
    toCity: "İstanbul",
    companyName: "Kamil Koç",
    time: "16:00",
    chairs: "16",
    price: "170",
    startDate: "2023/12/12",
    companyImage:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Metro_Turizm_Logo.png",
  },
  {
    id: "3",
    fromCity: "Elazığ",
    toCity: "Malatya",
    companyName: "Kamil Koç",
    time: "16:00",
    chairs: "8",
    startDate: "2023/12/12",
    price: "180",
    companyImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvj5PLjOtGETX3msRIlRWMWGTcz4EwcAYtqoyzNh5Q&s",
  },
  {
    id: "4",
    fromCity: "Elazığ",
    toCity: "Diyarbakır",
    companyName: "Kamil Koç",
    time: "16:00",
    chairs: "15",
    startDate: "2023/12/12",
    price: "160",
    companyImage:
      "https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/partner/315-sm.png",
  },
  {
    id: "5",
    fromCity: "Elazığ",
    toCity: "İstanbul",
    companyName: "Kamil Koç",
    time: "16:00",
    chairs: "16",
    price: "170",
    startDate: "2023/12/12",
    companyImage:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Metro_Turizm_Logo.png",
  },
  {
    id: "6",
    fromCity: "Elazığ",
    toCity: "İstanbul",
    companyName: "Kamil Koç",
    time: "16:00",
    chairs: "16",
    price: "170",
    startDate: "2023/12/12",
    companyImage:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Metro_Turizm_Logo.png",
  },
  {
    id: "7",
    fromCity: "Elazığ",
    toCity: "İstanbul",
    companyName: "Kamil Koç",
    time: "16:00",
    chairs: "16",
    price: "170",
    startDate: "2023/12/12",
    companyImage:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Metro_Turizm_Logo.png",
  },
  {
    id: "8",
    fromCity: "Elazığ",
    toCity: "Malatya",
    companyName: "Kamil Koç",
    time: "16:00",
    chairs: "16",
    price: "170",
    startDate: "2023/12/12",
    companyImage:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Metro_Turizm_Logo.png",
  },
  {
    id: "9",
    fromCity: "Elazığ",
    toCity: "Malatya",
    companyName: "Kamil Koç",
    time: "16:00",
    chairs: "16",
    price: "170",
    startDate: "2023/12/12",
    companyImage:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Metro_Turizm_Logo.png",
  },
];

const ChoosExpedition = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { fromCity, toCity, startDate } = route.params;

  const write = (item) => {
    navigation.navigate("DetailScreen", { item });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitleStyle: {
        color: "white",
      },

      headerTitle: () => (
        <Pressable style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{fromCity + "   "}</Text>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/arrows.png")}
          />
          <Text style={styles.headerTitle}>{"   " + toCity}</Text>
        </Pressable>
      ),

      headerStyle: {
        backgroundColor: "#003580",
        height: 80,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  const filteredBooking = useMemo(() => {
    return booking.filter((item) => {
      return item.fromCity === fromCity && item.toCity === toCity;
    });
  }, [fromCity, toCity, startDate]);

  const Item = ({ time, companyImage, chairs, price, item }) => (
    <TouchableOpacity onPress={() => write(item)} style={styles.item}>
      <View
        style={{
          flexDirection: "row",
          gap: 15,
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <Image
          source={{
            uri: companyImage,
          }}
          style={styles.Image}
        />
        <Text
          style={{
            marginRight: 20,
            fontSize: 18,
          }}
        >
          {time}
        </Text>
        <Text
          style={{
            marginRight: 35,
            fontSize: 18,
          }}
        >
          {chairs}
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          {price} TL
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 15,
          justifyContent: "space-around",
          marginVertical: 20,
          marginHorizontal: 16,
          paddingVertical: 15,
          borderStyle: "dashed",
          borderWidth: 1,
          borderColor: "#2E4DA7",
          padding: 5,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Firma</Text>
        <Text style={{ fontWeight: "bold" }}>Saat</Text>
        <Text style={{ fontWeight: "bold" }}>Koltuk</Text>
        <Text style={{ fontWeight: "bold" }}>Fiyat</Text>
      </View>
      <FlatList
        data={filteredBooking}
        renderItem={({ item }) => (
          <Item
            time={item.time}
            companyImage={item.companyImage}
            chairs={item.chairs}
            price={item.price}
            item={item}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ChoosExpedition;

const styles = StyleSheet.create({
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
