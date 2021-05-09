import "./App.css";
import Search from "./components/SearchComponent/Search";
import MoviesCarousel from './components/Home/MoviesCarousel'
import ApplicationHeaderComponent from './components/ApplicationHeader/ApplicationHeaderComponent';

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
    </div>
  );
}
export default App;