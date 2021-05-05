import "./App.css";
import Search from "./components/Search";
import MoviesCarousel from './components/MoviesCarousel'
import ApplicationHeaderComponent from './components/ApplicationHeaderComponent';
import MovieDetail from './components/MovieDetail'

function App() {
  return (
    <div className="App">
      <div>
      <ApplicationHeaderComponent />
      </div>
      <div>
        <MoviesCarousel />
        <Search />
      </div>
      <MovieDetail/>
    </div>
  );
}
//  <ApplicationHeaderComponent/>
export default App;