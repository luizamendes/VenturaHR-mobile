import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

interface ButtonProps {
  text: string;
  onPress(): void;
  kind?: string;
}

export const Button = ({ text, onPress, kind }: ButtonProps) => {
  const buttonStyles = () => {
    if (kind?.toLowerCase() === "secondary") {
      return [styles.button, styles.buttonSecondary];
    } else {
      return [styles.button, styles.buttonPrimary];
    }
  };

  return (
    <TouchableOpacity style={buttonStyles()} onPress={onPress}>
      <Text
        style={kind === "secondary" ? styles.textSecondary : styles.textPrimary}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
