import React from "react";
import { View, Text } from "react-native";
import { Job } from "../../models/Job";
import { styles } from "../JobList/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface JobListProps {
  title: string;
  jobs: Job[];
}

export const JobList = ({ title, jobs }: JobListProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {jobs.map((job) => (
        <TouchableOpacity
          style={styles.jobRow}
          key={job.id}
          onPress={() => navigation.navigate("JobDetails", { id: job.id })}
        >
          <Text>{job.name}</Text>
          <Text>{job.company}</Text>
          <Text>{job.city}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
