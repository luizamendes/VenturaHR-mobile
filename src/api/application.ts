import { privateClient } from "./client";

const fetchApplicationById = (id: number) =>
  privateClient.get(`/application/${id}`);

export { fetchApplicationById };
