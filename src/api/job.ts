import { client, privateClient } from "./client";

const fetchLatestJobs = () => client.get("/jobs/latest/4");

const fetchAllJobs = () => privateClient.get("/jobs");

const fetchJobById = (id: number) => privateClient.get(`/jobs/${id}`);

const fetchJobByQuery = (query: string) =>
  privateClient.get(`/jobs/search/${query}`);

const fetchCandidateJobs = () => privateClient.get("/candidates/application");

export {
  fetchLatestJobs,
  fetchAllJobs,
  fetchJobByQuery,
  fetchJobById,
  fetchCandidateJobs,
};
