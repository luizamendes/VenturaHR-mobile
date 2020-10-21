import { client, privateClient } from "./client";

const fetchLatestJobs = () => client.get("/jobs/latest/4");

const fetchAllJobs = () => privateClient.get("/jobs");

const fetchJobByQuery = (query: string) =>
  privateClient.get(`/jobs/search/${query}`);

export { fetchLatestJobs, fetchAllJobs, fetchJobByQuery };
