import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "../../components/Input";
import { styles } from "./styles";

export const Register = () => {
  return (
    <ScrollView style={styles.container}>
      <Input label="Nome (*)" />
      <Input label="Endereço (*)" />
      <Input label="Telefone (*)" />
      <Input label="Email (*)" />
      <Input label="Senha (*)" />
      <Input label="Confirmação da senha (*)" />
    </ScrollView>
  );
};
