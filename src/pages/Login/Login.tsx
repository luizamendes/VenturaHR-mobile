import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { requestLogin } from "../../api/login";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { styles } from "./styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRequestLogin = async () => {
    if (!email || !password) {
      return;
    }

    try {
      const { data } = await requestLogin(email, password);
      const { user: loggedUser, token } = data;
      await AsyncStorage.setItem("tkn", token);
      navigation.navigate("Dashboard");
    } catch (error) {
      console.log(error.message);
      //
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cta}>
        Faça login, tenha acesso a diversas vagas e encontre seu próximo
        emprego!
      </Text>
      <Input label="E-mail" value={email} onChangeText={setEmail} />
      <Input label="Senha" value={password} onChangeText={setPassword} />
      <Button text="Entrar" onPress={handleRequestLogin} />
      <Button
        text="Criar conta"
        kind="secondary"
        onPress={handleRequestLogin}
      />
    </View>
  );
};
