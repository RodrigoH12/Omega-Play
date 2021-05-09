import "./App.css";
import Search from "./components/Search";
import MoviesCarousel from './components/MoviesCarousel'
import ApplicationHeaderComponent from './components/ApplicationHeaderComponent';
import { Container} from "react-bootstrap";

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
//  <ApplicationHeaderComponent/>
export default App;