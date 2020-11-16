import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const getDefaultClient = () =>
  axios.create({
    baseURL: "http://192.168.1.66:5000",
    headers: { "Content-Type": "application/json" },
  });

const getPrivateClient = () => {
  const client = getDefaultClient();

  client.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("tkn");

      if (token) {
        config.headers.Authorization = token;
      }

      return config;
    },
    (error) => {
      error.message = `PrivateClient::interceptor::request error - ${error.message}`;
      return Promise.reject(error);
    }
  );

  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      const httpStatus = error.response ? error.response.status : null;

      if (httpStatus === 401) {
        await AsyncStorage.removeItem("tkn");
        await AsyncStorage.removeItem("user");
      }

      return Promise.reject(error);
    }
  );

  return client;
};

const client = getDefaultClient();
const privateClient = getPrivateClient();

export { client, privateClient };
