import axios from "axios";
import { delay } from "./delay";

interface IUser {
  id: number;
  name: string;
}

export const userApiEndpoint = "users";

const userApi = axios.create({
  baseURL: `http://localhost:3500/${userApiEndpoint}`,
});

export const getUsers = async (forceFail = false) => {
  await delay(1500);
  if (forceFail)
    return Promise.reject({
      message: "Can't get data due to being forced to fail",
    });
  const response = await userApi.get("");
  return response.data as IUser[];
};
