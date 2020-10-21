import { privateClient } from "./client";

const fetchAllJobs = () => privateClient.get("/jobs");

const fetchJobByQuery = (query: string) =>
  privateClient.get(`/jobs/search/${query}`);

export { fetchAllJobs, fetchJobByQuery };
