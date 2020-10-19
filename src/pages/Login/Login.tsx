import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { styles } from "./styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRequestLogin = () => {
    const user = { email, password };

    console.log("handleRequestLogin -> user", user);
  };

  return (
    <View style={styles.container}>
      <Input label="E-mail" value={email} onChangeText={setEmail} />
      <Input label="Senha" value={password} onChangeText={setPassword} />
      <Button text="Login" onPress={handleRequestLogin} />
    </View>
  );
};
