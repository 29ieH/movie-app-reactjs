import FeatureMovie from "../component/FeatureMovie";
import MovieList from "../component/MediaList";
import { CategoryMovies, RatedTabs } from "../libs/constant";
const HomePage = () => {
  return (
    <div>
      <FeatureMovie></FeatureMovie>
      <MovieList title={"Trending"} tabs={CategoryMovies}></MovieList>
      <MovieList title={"Top Rated"} tabs={RatedTabs}></MovieList>
    </div>
  );
};

export default HomePage;
