import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles/DetailScreen.styles";
let selectedSeats = [];
const DetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;
  const [row1, setRow1] = useState([
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
  ]);
  const [row2, setRow2] = useState([
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
  ]);
  const [row3, setRow3] = useState([
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);
  const onSelectRow1 = (index) => {
    let tempRow = [];
    tempRow = row1;
    tempRow.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
          item.empty = true;
        } else {
          if (getSelectedSeats() < 4) {
            item.selected = true;
            item.empty = false;
          } else {
            alert("4 den fazla seçim yapılamaz");
          }
        }
      }
    });
    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow1(tempSeats);
  };
  const onSelectRow2 = (index) => {
    let tempRow = [];
    tempRow = row2;
    tempRow.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
          item.empty = true;
        } else {
          if (getSelectedSeats() < 4) {
            item.selected = true;
            item.empty = false;
          } else {
            alert("4 den fazla seçim yapılamaz");
          }
        }
      }
    });
    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow2(tempSeats);
  };
  const onSelectRow3 = (index) => {
    let tempRow = [];
    tempRow = row3;
    tempRow.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
          item.empty = true;
        } else {
          if (getSelectedSeats() < 4) {
            item.selected = true;
            item.empty = false;
          } else {
            alert("4 den fazla seçim yapılamaz");
          }
        }
      }
    });
    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow3(tempSeats);
  };

  const getSelectedSeats = () => {
    selectedSeats = [];
    row1.map((item) => {
      if (item.selected == true) {
        selectedSeats.push(1);
      }
    });
    row2.map((item) => {
      if (item.selected == true) {
        selectedSeats.push(1);
      }
    });
    row3.map((item) => {
      if (item.selected == true) {
        selectedSeats.push(1);
      }
    });
    if (selectedSeats.length <= 4) {
      return selectedSeats.length;
    } else return alert("4 den fazla koltuk seçilemez");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <Pressable style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Sefer Detay</Text>
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

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 15,
          justifyContent: "space-around",
          marginVertical: 10,
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
        <Image
          source={{
            uri: item.companyImage,
          }}
          style={styles.Image}
        />
        <Text style={styles.title}>{item.startDate}</Text>
        <Text style={styles.title}>{item.time}</Text>
        <Text style={styles.title}>{item.price} TL</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "48%",
            height: "83%",
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#8e8e8e",
            paddingVertical: 15,
          }}
        >
          <Image
            source={require("../assets/car.png")}
            style={{
              width: 24,
              height: 24,
              alignSelf: "flex-start",
              margin: 10,
              opacity: 0.5,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <FlatList
                data={row1}
                numColumns={2}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        if (item.selected == false && item.empty == false) {
                          alert("Zaten Dolu");
                        } else {
                          onSelectRow1(index);
                        }
                      }}
                      style={{ margin: 10 }}
                    >
                      {item.empty == false && item.selected == true ? (
                        <Image
                          source={require("../assets/seat.png")}
                          style={{
                            width: 24,
                            height: 24,
                            tintColor: "green",
                          }}
                        />
                      ) : item.empty == true && item.selected == false ? (
                        <Image
                          source={require("../assets/seat2.png")}
                          style={{ width: 24, height: 24 }}
                        />
                      ) : item.empty == false && item.selected == false ? (
                        <Image
                          source={require("../assets/seat.png")}
                          style={{
                            width: 24,
                            height: 24,
                            tintColor: "#8e8e8e",
                          }}
                        />
                      ) : null}
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <View>
              <FlatList
                data={row2}
                numColumns={1}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={{ margin: 10 }}
                      onPress={() => {
                        if (item.selected == false && item.empty == false) {
                          alert("Zaten Dolu");
                        } else {
                          onSelectRow2(index);
                        }
                      }}
                    >
                      {item.empty == false && item.selected == true ? (
                        <Image
                          source={require("../assets/seat.png")}
                          style={{
                            width: 24,
                            height: 24,
                            tintColor: "green",
                          }}
                        />
                      ) : item.empty == true && item.selected == false ? (
                        <Image
                          source={require("../assets/seat2.png")}
                          style={{ width: 24, height: 24 }}
                        />
                      ) : item.empty == false && item.selected == false ? (
                        <Image
                          source={require("../assets/seat.png")}
                          style={{
                            width: 24,
                            height: 24,
                            tintColor: "#8e8e8e",
                          }}
                        />
                      ) : null}
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
          <View>
            <FlatList
              data={row3}
              numColumns={1}
              horizontal
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={{ margin: 4 }}
                    onPress={() => {
                      if (item.selected == false && item.empty == false) {
                        alert("Zaten Dolu");
                      } else {
                        onSelectRow3(index);
                      }
                    }}
                  >
                    {item.empty == false && item.selected == true ? (
                      <Image
                        source={require("../assets/seat.png")}
                        style={{
                          width: 24,
                          height: 24,
                          tintColor: "green",
                        }}
                      />
                    ) : item.empty == true && item.selected == false ? (
                      <Image
                        source={require("../assets/seat2.png")}
                        style={{ width: 24, height: 24 }}
                      />
                    ) : item.empty == false && item.selected == false ? (
                      <Image
                        source={require("../assets/seat.png")}
                        style={{
                          width: 24,
                          height: 24,
                          tintColor: "#8e8e8e",
                        }}
                      />
                    ) : null}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#fff",
          height: 60,
          width: "100%",
          elevation: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#000", marginLeft: 20 }}>
          {"Seçilen Koltuk(" + getSelectedSeats() + ")"}
        </Text>
        <TouchableOpacity
          style={{
            width: "40%",
            height: 40,
            backgroundColor: "#003580",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            marginRight: 15,
          }}
          onPress={() => navigation.navigate("PaymentScreen")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {item.price * getSelectedSeats()} TL Öde
          </Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={() => navigation.navigate("SingUp")}>
        <Text>Ödeme</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default DetailScreen;
