import { converToInterger } from "../../utils";
import CircularProgessBar from "./CircularProgessBar";
import propTypes from "prop-types";
const MovieCard = (props) => {
  const {
    data: {
      backdrop_path,
      title,
      name,
      release_date,
      first_air_date,
      media_type,
      vote_average,
    },
  } = props;
  const averange = vote_average * 10;
  return (
    <div className="relative rounded-lg border border-slate-800">
      {media_type && media_type === "tv" && (
        <p className="absolute right-1 top-1 rounded bg-slate-950 px-1 py-0.5">
          Tv Show
        </p>
      )}
      <img
        className="rounded-lg object-cover"
        src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
      ></img>
      <div className="relative -top-7 px-4 py-2">
        <CircularProgessBar
          percent={converToInterger(averange)}
          strokeColor={vote_average > 70 ? "orange" : "green"}
        ></CircularProgessBar>
        <p className="text-w[1.4vw] font-bold">{title ?? name}</p>
        <p className="text-w[1vw]">{release_date ?? first_air_date}</p>
      </div>
    </div>
  );
};
MovieCard.propTypes = {
  data: propTypes.shape({
    backdrop_path: propTypes.string,
    title: propTypes.string,
    release_date: propTypes.string,
    first_air_date: propTypes.string,
    media_type: propTypes.string,
    vote_average: propTypes.number,
    name: propTypes.string,
  }),
};
export default MovieCard;
