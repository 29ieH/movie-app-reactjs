import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Movie = (props) => {
  const {
    data: { backdrop_path, title, overview, release_date },
  } = props;
  return (
    <>
      <img
        className="aspect-video brightness-50"
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      />
      <div className="absolute bottom-[30%] left-8 w-1/3 text-white">
        <p className="mb-1 text-lg font-bold md:text-[2vw]">{title}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="mb-3 text-[1.2vw]">{release_date}</p>
        </div>
        <div className="hidden text-[1.2vw] md:block">
          <p className="font-bold text-[1wh]">Over view</p>
          <p>{overview}</p>
        </div>
        <div className="mt-4">
          <button className="mr-2 rounded bg-white px-4 py-2 text-[10px] text-black lg:text-lg">
            <FontAwesomeIcon icon={faPlay} />
            Trailer
          </button>
          <button className="rounded bg-slate-300/35 px-4 py-2 text-[10px] lg:text-lg">
            View Detail
          </button>
        </div>
      </div>
    </>
  );
};
Movie.propTypes = {
  data: PropTypes.shape({
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
  }),
};

export default Movie;
