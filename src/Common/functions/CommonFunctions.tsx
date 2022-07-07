import axios from "axios";

export const AxiosGetData = (url: string) => {
  const resoponse = axios.get(url);
  return resoponse;
};
