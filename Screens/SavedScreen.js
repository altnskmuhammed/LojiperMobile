import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles/SavedScreen.styles";
const SavedScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <View style={styles.headerTitleContainer}>
          <Ionicons name="menu" size={24} color="white" />
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Favorilerim
          </Text>
        </View>
      ),

      headerStyle: {
        backgroundColor: "#003580",
        height: 80,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.ticket}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0lz-eyE4FPKE0xOFEqyiqBySNhkit0ZdIxu77nZi9&s",
          }}
          style={styles.logo}
        />
        <Text style={styles.seferDurumu}>Sefer Durumu: Aktif</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Nereden:</Text>
            <Text style={styles.value}>İstanbul</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Nereye:</Text>
            <Text style={styles.value}>Elazığ</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Yolcu Adı Soyadı:</Text>
            <Text style={styles.value}>Muhammed Altunışık</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>PNR No:</Text>
            <Text style={styles.value}>ABC123</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Koltuk No:</Text>
            <Text style={styles.value}>12A</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Fiyat Tutarı:</Text>
            <Text style={styles.value}>200 TL</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SavedScreen;
