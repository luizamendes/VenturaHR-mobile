import React from "react";
import { View, Text } from "react-native";
import { Button } from "../Button";
import { Input } from "../Input";
import { styles } from "./styles";

interface SearchProps {
  query: string;
  setQuery: any;
  onSearch(): void;
}

export const Search = ({ query, setQuery, onSearch }: SearchProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtrar vagas</Text>
      <Input
        value={query}
        onChangeText={setQuery}
        placeholder="Digite aqui uma palavra-chave"
      />
      <Button text="Buscar" onPress={onSearch} />
    </View>
  );
};
