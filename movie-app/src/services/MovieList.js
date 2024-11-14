import axios from "../core/AxiosService";
export const getListMovieByUrl = async (key) => {
  console.log({ key });
  return await axios.get(`${key}`);
};
