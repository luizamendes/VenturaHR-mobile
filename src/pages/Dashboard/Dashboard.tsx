import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { fetchAllJobs, fetchJobByQuery } from "../../api/job";
import { JobList } from "../../components/JobList";
import { Search } from "../../components/Search";
import { Job } from "../../models/Job";

export const Dashboard = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [query, setQuery] = useState("");
  const [jobsTitle, setJobsTitle] = useState("Todas as vagas");

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await fetchAllJobs();
        setJobs(data);
      } catch (err) {
        //
      }
    };

    fetch();
  }, []);

  const handleSearch = async () => {
    try {
      let results = [];
      if (!query) {
        const { data } = await fetchAllJobs();
        results = data;
        setJobsTitle("Todas as vagas");
      } else {
        const { data } = await fetchJobByQuery(query);
        results = data;
        setJobsTitle(`Mostrando resultados incluindo "${query}"`);
      }
      setJobs(results);
    } catch (error) {
      //
    }
  };

  return (
    <ScrollView>
      <Search query={query} setQuery={setQuery} onSearch={handleSearch} />
      <JobList title={jobsTitle} jobs={jobs} />
    </ScrollView>
  );
};
