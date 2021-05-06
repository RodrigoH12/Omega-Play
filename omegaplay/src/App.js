import "./App.css";
import Search from "./components/Search";
import MoviesCarousel from './components/MoviesCarousel'
import ApplicationHeaderComponent from './components/ApplicationHeaderComponent';

function App() {
  return (
    <div className="App">
      <ApplicationHeaderComponent/>
      <header className="App-header">
        <MoviesCarousel />
        <Search />
      </header>
    </div>
  );
}

export default App;