import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface InputProps {
  label?: string;
  password?: boolean;
}

export const Input = ({
  label,
  password,
  ...props
}: InputProps & TextInputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput secureTextEntry={!!password} {...props} style={styles.input} />
    </View>
  );
};
