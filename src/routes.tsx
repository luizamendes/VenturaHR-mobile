import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const { Navigator, Screen } = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        {/* <Screen name="Home" component={Home} /> */}
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
};
