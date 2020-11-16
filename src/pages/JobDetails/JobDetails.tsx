import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Text, ScrollView, View } from "react-native";
import { Picker } from "@react-native-community/picker";
import { fetchJobById } from "../../api/job";
import { Button } from "../../components/Button";
import { Job } from "../../models/Job";
import { styles } from "./styles";
import { Criteria } from "../../models/Criteria";
import { apply } from "../../api/candidate";

interface JobDetailsRouteParams {
  id: number;
}
export const JobDetails = () => {
  const route = useRoute();
  const { id } = route.params as JobDetailsRouteParams;
  const [job, setJob] = useState<Job>();
  const [application, setApplication] = useState<Criteria[]>([]);
  const [isApplying, setIsApplying] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await fetchJobById(id);
        setJob(data);
        setApplication(data.criteriaList);
      } catch (error) {
        //
      }
    };

    fetch();
  }, []);

  const handleSaveAnswer = (itemValue: any, criteriaIndex: number) => {
    const app = [...application];
    app[criteriaIndex].applicantAnswer = itemValue;
    setApplication([...app]);
  };

  const handleApplication = async () => {
    try {
      const processedApplication = application.map((criteria) => {
        criteria.weight = +criteria.weight;
        criteria.profile = +criteria.profile;
        criteria.applicantAnswer ? +criteria.applicantAnswer : undefined;

        return criteria;
      });

      await apply({ answers: JSON.stringify(processedApplication) }, id);
    } catch (error) {
      console.log("handleApplication -> error", error);
      //
    }
  };

  if (!job) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>Vaga</Text>
        <Text style={styles.text}>{job.name}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Descrição</Text>
        <Text style={styles.text}>{job.description}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Local</Text>
        <Text style={styles.text}>{job.city}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Criada em</Text>
        <Text style={styles.text}>
          {moment(job.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Candidate-se até</Text>
        <Text style={styles.text}>
          {moment(job.openUntil).format("DD/MM/YYYY")}
        </Text>
      </View>
      {false ? (
        <Text>Você já se candidatou a esta vaga</Text>
      ) : (
        <>
          <Button
            text="Quero me candidatar"
            onPress={() => setIsApplying(true)}
          />
          {isApplying && (
            <View style={styles.criteria}>
              <Text style={styles.label}>Critérios analisados</Text>
              <Text style={styles.criteriaSubtitle}>
                Preencha os critérios da vaga de acordo com sua experiência
              </Text>
              {application.map((criteria, index) => {
                return (
                  <View key={criteria.id}>
                    <Text>
                      <Text style={styles.criteriaName}>{criteria.name}: </Text>
                      {criteria.description}
                    </Text>
                    <Picker
                      selectedValue={application[index].applicantAnswer}
                      onValueChange={(itemValue) =>
                        handleSaveAnswer(itemValue, index)
                      }
                    >
                      <Picker.Item label="0 a 1 ano" value="1" />
                      <Picker.Item
                        label="mais de 1 e menos de 4 anos"
                        value="2"
                      />
                      <Picker.Item
                        label="mais de 4 e menos de 7 anos"
                        value="3"
                      />
                      <Picker.Item
                        label="mais de 7 e menos de 10 anos"
                        value="4"
                      />
                      <Picker.Item label="mais de 10 anos" value="5" />
                    </Picker>
                  </View>
                );
              })}
              <Button text="Enviar" onPress={handleApplication} />
            </View>
          )}
        </>
      )}
      <Button text="Indicar vaga" kind="secondary" onPress={() => {}} />
    </ScrollView>
  );
};
