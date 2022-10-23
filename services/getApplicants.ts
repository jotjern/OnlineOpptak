import axios from "axios";
import { DBapplicant } from "../types";
export function getApplicants(): Promise<{applicants : DBapplicant[]}> {
  return axios("/api/getapplicants.ts").then((result) => result.data);
}

export default getApplicants;