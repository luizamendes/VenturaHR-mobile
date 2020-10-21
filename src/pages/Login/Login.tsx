import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { styles } from "./styles";
import { requestLogin } from "../../api/login";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

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
      <Input label="E-mail" value={email} onChangeText={setEmail} />
      <Input label="Senha" value={password} onChangeText={setPassword} />
      <Button text="Login" onPress={handleRequestLogin} />
      <Button
        text="Criar conta"
        kind="secondary"
        onPress={handleRequestLogin}
      />
    </View>
  );
};
