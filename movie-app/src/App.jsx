import Header from "./component/Header";
// import FeatureMovie from "./component/FeatureMovie";
// import MovieList from "./component/MediaList";
// import { CategoryMovies, RatedTabs } from "./component/libs/constant";
import AppRoute from "./routes/AppRoute";
function App() {
  return (
    <div>
      <Header></Header>
      <AppRoute></AppRoute>
    </div>
  );
}

export default App;
