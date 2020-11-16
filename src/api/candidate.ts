import { privateClient } from "./client";

const apply = (application: any, jobId: number) =>
  privateClient.post("/candidates/application", { application, jobId });

const getApplications = () => privateClient.get("/candidates/application");

export { apply, getApplications };
