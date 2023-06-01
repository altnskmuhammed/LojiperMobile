import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles/HomeScreen.styles";
import DatePicker from "react-native-date-ranges";
import { Fontisto } from "@expo/vector-icons";
import RadioGroup from "react-native-radio-buttons-group";
import SelectDropdown from "react-native-select-dropdown";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [selectedId, setSelectedId] = useState("2");

  const searchCar = () => {
    if (
      selectedId == "2" &&
      fromCity !== undefined &&
      toCity !== undefined &&
      startDate !== undefined
    ) {
      console.log("onay", fromCity, toCity, startDate);
      navigation.navigate("ChoosExpedition", {
        fromCity: fromCity,
        toCity: toCity,
        startDate: startDate,
      });
    }
  };

  const cities = [
    "Adana",
    "Adıyaman",
    "Afyon",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Isparta",
    "İçel (Mersin)",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
  ];

  console.log(selectedId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <View style={styles.headerTitleContainer}>
          <Ionicons name="menu" size={24} color="white" />
          <Text style={styles.headerTitle}>Bilet Ara</Text>
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
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string

        label: "Gidiş-Dönüş",
        value: "Gidiş-Dönüş",
      },
      {
        id: "2",
        label: "Gidiş",
        value: "Gidiş",
      },
    ],
    []
  );
  const customButton = (onConfirm) => {
    return (
      <TouchableOpacity
        style={{
          height: 55,
          width: "80%",
          borderRadius: 10,

          marginLeft: 100,
          marginRight: 100,
          margin: 50,
        }}
      >
        <Button
          onPress={onConfirm}
          title="Onay"
          color={"#003580"}
          accessibilityLabel="Learn more about this button"
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ marginTop: "10%" }}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        layout="row-reverse"
        color="#003"
        containerStyle={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      />
      <ScrollView>
        <View
          style={{
            margin: 20,
            borderWidth: 2,
            borderColor: "grey",
            borderStyle: "dashed",
            gap: 15,
            borderRadius: 6,
            padding: 15,
            paddingVertical: 25,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "grey",
              borderStyle: "solid",
              gap: 7,
              borderWidth: 1,
              paddingVertical: 10,
            }}
          >
            <SelectDropdown
              data={cities}
              onSelect={(selectedItem, index) => {
                setFromCity(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
              defaultButtonText="Nereden"
              buttonStyle={{
                backgroundColor: "transparent",
              }}
              buttonTextStyle={{
                marginRight: 80,
                color: "grey",
                fontSize: 18,
              }}
              renderDropdownIcon={() => (
                <Ionicons name="location-outline" size={24} color="black" />
              )}
              dropdownIconPosition={"left"}
              dropdownStyle={styles.dropdownStyle}
            />
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 10,
              borderColor: "grey",
              borderStyle: "solid",
              gap: 7,
              borderWidth: 1,
              paddingVertical: 10,
            }}
          >
            <SelectDropdown
              data={cities}
              onSelect={(selectedItem, index) => {
                setToCity(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
              defaultButtonText="Nereye"
              buttonStyle={{
                backgroundColor: "transparent",
              }}
              buttonTextStyle={{
                marginRight: 80,
                color: "grey",
                fontSize: 18,
              }}
              renderDropdownIcon={() => (
                <Ionicons name="location-outline" size={24} color="black" />
              )}
              dropdownIconPosition={"left"}
            />
          </Pressable>

          <View style={{ flexDirection: "row", gap: 7 }}>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "grey",
                borderStyle: "solid",
                borderWidth: 1,
                paddingVertical: 10,
                flex: 1,
              }}
            >
              <Fontisto
                style={{ marginLeft: 10 }}
                name="date"
                size={24}
                color="black"
              />
              <DatePicker
                style={{
                  width: 350,
                  height: 40,
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: "transparent",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                    marginLeft: 7,
                    color: "grey",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    marginRight: "auto",
                    marginLeft: 7,
                  },
                }} // optional
                selectedBgColor="#0047AB"
                allowFontScaling={false} // optional
                placeholder={"Gidiş tarihi"}
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(date) => setStartDate(date)}
                mode={"single"}
              />
            </Pressable>
            {selectedId == "1" && (
              <Pressable
                style={{
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "center",
                  gap: 10,
                  paddingHorizontal: 10,
                  borderColor: "#003580",
                  borderWidth: 0.5,
                  paddingVertical: 15,
                }}
              >
                <Fontisto name="date" size={24} color="black" />
                <DatePicker
                  style={{
                    width: 350,
                    height: 30,
                    borderRadius: 0,
                    borderWidth: 0,
                    borderColor: "transparent",
                  }}
                  customStyles={{
                    placeholderText: {
                      fontSize: 20,
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: "auto",
                      color: "grey",
                    },
                    headerStyle: {
                      backgroundColor: "#003580",
                    },
                    contentText: {
                      fontSize: 15,
                      flexDirection: "row",
                      marginRight: "auto",
                    },
                  }} // optional
                  selectedBgColor="#0047AB"
                  allowFontScaling={false} // optional
                  placeholder={"Dönüş Tarihi"}
                  customButton={(onConfirm) => customButton(onConfirm)}
                  onConfirm={(date) => setEndDate(date)}
                  mode={"single"}
                />
              </Pressable>
            )}
          </View>

          <TouchableOpacity
            onPress={searchCar}
            style={{
              marginTop: 10,
              backgroundColor: "#003580",
              height: 55,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Bilet Ara
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
