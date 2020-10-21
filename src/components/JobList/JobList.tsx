import React from "react";
import { View, Text } from "react-native";
import { Job } from "../../models/Job";
import { styles } from "../JobList/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

interface JobListProps {
  title: string;
  jobs: Job[];
}

export const JobList = ({ title, jobs }: JobListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {jobs.map((job) => (
        <TouchableOpacity style={styles.jobRow} key={job.id}>
          <Text>{job.name}</Text>
          <Text>{job.company}</Text>
          <Text>{job.city}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
