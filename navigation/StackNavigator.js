import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HomeScreen from "../Screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SavedScreen from "../Screens/SavedScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChoosExpedition from "../Screens/ChoosExpedition";
import DetailScreen from "../Screens/DetailScreen";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import PaymentScreen from "../Screens/PaymentScreen";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const [isLogIn, setIsLogIn] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyAjw_IzgVIzMqhRjy4ZUhdCmy8tlQvVERA",
    authDomain: "lojipermobile.firebaseapp.com",
    projectId: "lojipermobile",
    storageBucket: "lojipermobile.appspot.com",
    messagingSenderId: "841000061164",
    appId: "1:841000061164:web:89daf3905f2d18b009bdc9",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
    }
  });

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Ana Sayfa",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#003580" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Favorilerim",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="#003580" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profil",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#003580" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      {!isLogIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="SingIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SingUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ChoosExpedition"
            component={ChoosExpedition}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
