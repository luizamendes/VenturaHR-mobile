import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Application, Answer } from "../../models/Application";
import { fetchApplicationById } from "../../api/application";
import { styles } from "./styles";

interface ApplicationDetailsRouteParams {
  id: number;
}

export const ApplicationDetails = () => {
  const route = useRoute();
  const { id } = route.params as ApplicationDetailsRouteParams;
  const [application, setApplication] = useState<Application>();
  const [answers, setAnswers] = useState<Answer[]>();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await fetchApplicationById(id);
        setApplication(data);
        if (data.answers) setAnswers(JSON.parse(data.answers));
      } catch (error) {
        //
      }
    };

    fetch();
  }, []);

  if (!application) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Candidatura a: {application.application.name}
      </Text>
      <Text style={styles.title}>
        {application.application.company} / {application.application.city}
      </Text>
      {answers &&
        answers.map((answer: Answer) => (
          <View style={styles.criteriaRow}>
            <Text>Critério: {answer.name}</Text>
            <Text>Descrição: {answer.description}</Text>
            <Text>Sua resposta: {answer.applicantAnswer}</Text>
          </View>
        ))}
    </View>
  );
};
