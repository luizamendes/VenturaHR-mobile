import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { fetchLatestJobs } from "../../api/job";
import { Button } from "../../components/Button";
import { JobList } from "../../components/JobList";
import { Job } from "../../models/Job";
import { styles } from "./styles";

export const Home = () => {
  const [latestJobs, setLatestJobs] = useState<Job[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await fetchLatestJobs();
        setLatestJobs(data);
      } catch (error) {
        //
      }
    };

    fetch();
  }, []);

  return (
    <ScrollView>
      <JobList title="Últimas vagas" jobs={latestJobs} />
      <View style={styles.container}>
        <Button
          text="Faça login"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          text="Crie nova conta"
          kind="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ScrollView>
  );
};
