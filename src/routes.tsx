import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";

const { Navigator, Screen } = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        <Screen name="Login" component={Login} />
        <Screen name="Dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  );
};
