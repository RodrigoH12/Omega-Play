import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import movies from "./mockedData/data.json";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          {" "}
          <Row>
          {movies.map((data) => (
              <Col className="mb-5" key={data._id}>
                <MovieCard data={data} />
              </Col>
            ))}
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;