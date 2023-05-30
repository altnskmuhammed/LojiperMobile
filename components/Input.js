import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-date-ranges";

const Input = (props) => {
  const [startDate, setStartDate] = useState();
  const [isEmpty, setIsEmpty] = useState(false);

  const handleChange = (e) => {
    props.onChangeInput(e, props.title);
    setIsEmpty(false);
  };

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Onayla"
      />
    );
  };

  const inputStyle = [
    styles.input,
    isEmpty ? { borderColor: "red" } : { borderColor: "gray" },
  ];

  return (
    <View style={styles.inputContainer}>
      {props.ıcon}

      {props.title === "Doğum tarihi" ? (
        <DatePicker
          // optional
          customStyles={{
            placeholderText: {
              marginRight: 210,
              color: "black",
              fontSize: 15,
            }, // placeHolder style
            contentText: { marginRight: 210, color: "#7c7c7c", fontSize: 15 },
          }} // optional
          style={styles.input}
          selectedBgColor="#003580"
          allowFontScaling={false} // optional
          placeholder={props.title}
          customButton={(onConfirm) => customButton(onConfirm)}
          onConfirm={(date) => setStartDate(date)}
          mode={"single"}
        />
      ) : (
        <TextInput
          style={inputStyle}
          placeholder={props.title}
          onChangeText={handleChange}
          secureTextEntry={props.title === "Parola" ? true : false}
          keyboardType={props.title === "Tc" ? "numeric" : "default"}
          autoCapitalize="none"
          onFocus={() => setIsEmpty(false)}
          onBlur={() => setIsEmpty(!Boolean(props.value))}
        />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 55,
    width: "100%",
    marginTop: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    borderRadius: 10, // Input kutusu köşeleri yuvarlatılıyor
  },
});
