import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { JobDetails } from "./pages/JobDetails";
import { MyApplications } from "./pages/MyApplications";
import { ApplicationDetails } from "./pages/ApplicationDetails";
import { Header } from "./components/Header";

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
        <Screen name="Home" component={Home} />
        <Screen name="Login" component={Login} />
        <Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Dashboard" />,
          }}
        />
        <Screen name="Register" component={Register} />
        <Screen name="Job Details" component={JobDetails} />
        <Screen name="Minhas Candidaturas" component={MyApplications} />
        <Screen name="Candidatura" component={ApplicationDetails} />
      </Navigator>
    </NavigationContainer>
  );
};
