import { client } from "./client";

const requestLogin = (email: string, password: string) =>
  client.post("/login", { email, password });

export { requestLogin };
