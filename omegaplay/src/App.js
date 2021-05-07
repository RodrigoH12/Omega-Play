import "./App.css";
import Search from "./components/Search";
import MoviesCarousel from './components/MoviesCarousel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MoviesCarousel />
        <Search />
      </header>
    </div>
  );
}

export default App;