import { Criteria } from "./Criteria";

export interface Job {
  id: number;
  name: string;
  description: string;
  city: string;
  company: string;
  openUntil: string;
  updatedAt: string;
  createdAt: string;
  criteriaList: Array<Criteria>;
}
