import logo from "./logo.svg";
import "./App.css";
import MovieCardGrid from "./components/MovieCardGrid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieCardGrid />
      </header>
    </div>
  );
}

export default App;