import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import MoviesCarousel from './components/MoviesCarousel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MoviesCarousel />
        <Search />
      </header>
    </div>
  );
}

export default App;