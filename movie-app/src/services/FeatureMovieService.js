import axios from "../core/AxiosService";
export const getMoviesPopular = async () => {
  console.log("Call get movie");
  return await axios.get("/movie/popular");
};
