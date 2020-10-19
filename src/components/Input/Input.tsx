import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface InputProps {
  label: string;
}

export const Input = ({ label, ...props }: InputProps & TextInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};
