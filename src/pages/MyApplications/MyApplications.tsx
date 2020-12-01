import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getApplications } from "../../api/candidate";
import { styles } from "./styles";
import { Application } from "../../models/Application";
import { useNavigation } from "@react-navigation/native";

export const MyApplications = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getApplications();
        setApplications(data);
      } catch (err) {
        //
      }
    };

    fetch();
  }, []);

  if (!applications.length) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {applications.map((app) => {
          return (
            <TouchableOpacity
              key={app.id}
              style={styles.application}
              onPress={() => navigation.navigate("Candidatura", { id: app.id })}
            >
              <Text style={styles.label}>Vaga</Text>
              <Text style={styles.text}>{app.application.name}</Text>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.text}>{app.application.description}</Text>
              {/* <Text>{app.answers}</Text> */}
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};
