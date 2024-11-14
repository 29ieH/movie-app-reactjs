import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetail from "../pages/MovieDetail";
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/movie-detail" element={<MovieDetail />}></Route>
    </Routes>
  );
};

export default AppRoute;
