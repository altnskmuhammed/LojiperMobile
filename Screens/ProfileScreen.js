import React, { useLayoutEffect } from "react";
import { View, Button, StyleSheet, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <View style={styles.headerTitleContainer}>
          <Ionicons name="menu" size={24} color="white" />
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Profil
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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginLeft: 7 }}>
            <Avatar.Image
              source={{
                uri: "https://vignette.wikia.nocookie.net/naruto/images/4/42/Naruto_Part_III.png/revision/latest/scale-to-width-down/300?cb=20180117103539",
              }}
              size={80}
            />

            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
                Muhammed Altunışık
              </Title>
            </View>
          </View>

          <View
            style={[
              styles.userInfoSection,
              { marginTop: "10%", marginLeft: "-10%" },
            ]}
          >
            <View style={styles.row}>
              <Icon name="map-marker-radius" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                Elazığ/Türkiye
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                +90 533 311 08 43
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                altnskmuh23@gmail.com
              </Text>
            </View>
          </View>

          <View style={styles.infoBoxWrapper}></View>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Favorilerim</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="credit-card" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Ödeme</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="share-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Paylaş</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="account-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Yardım</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="settings-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Ayarlar</Text>
            </View>
          </TouchableRipple>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  container: {
    flex: 1,
    marginTop: 30,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 16,
  },

  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 5,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  infoBoxWrapper: {
    height: 0.5,
    width: "100%",
    backgroundColor: "black",
  },
});
