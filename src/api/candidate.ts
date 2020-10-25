import { privateClient } from "./client";

const apply = (application: any, jobId: number) =>
  privateClient.post("/candidates/application", { application, jobId });

export { apply };
