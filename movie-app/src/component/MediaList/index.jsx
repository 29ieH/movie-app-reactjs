import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { getListMovieByUrl } from "../../services/MovieList";
import propTypes from "prop-types";
const MovieList = ({ title, tabs }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [tabIdActive, settabIdActive] = useState(tabs[0]?.id);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Bắt đầu loading khi gọi API
      try {
        console.log({ tabIdActive });
        const url =
          tabs.find((tab) => tab.id === tabIdActive).url ?? tabs[0].url;
        const data = await getListMovieByUrl(url);
        setMoviesData(data.results);
        console.log({ data });
      } catch (err) {
        console.error("Error fetching data: ", err);
      } finally {
        setIsLoading(false); // Kết thúc loading khi API hoàn thành
      }
    };
    fetchData();
  }, [tabIdActive, tabs]);
  return (
    <div className="bg-black p-8 text-[1vw] text-white">
      <div className="flex items-center gap-8">
        <p className="text-[1.5vw] font-bold">{title}</p>
        <ul className="flex items-center rounded-md border border-white">
          {tabs.map((ctg) => (
            <li
              key={ctg.id}
              onClick={() => {
                console.log("Id:: ", ctg.id);
                settabIdActive(ctg.id);
              }}
              className={`cursor-pointer rounded-md px-4 py-2 ${ctg.id === tabIdActive ? "bg-white text-black" : ""}`}
            >
              {ctg.title}
            </li>
          ))}
          {/* <li className="rounded-md bg-white px-4 py-2 text-black">All</li>
          <li className="rounded-md px-4 py-2">Movie</li>
          <li className="rounded-md px-4 py-2">Tv Shows</li> */}
        </ul>
      </div>
      <div className="mt-8 grid auto-rows-auto grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-6">
        {isLoading ? (
          <p>Loading... </p>
        ) : moviesData.length > 0 ? (
          moviesData.map((movie) => (
            <MovieCard key={movie.id} data={movie}></MovieCard>
          ))
        ) : (
          <p>No data...</p>
        )}
      </div>
    </div>
  );
};
MovieList.propTypes = {
  title: propTypes.string,
  tabs: propTypes.array,
};
export default MovieList;
