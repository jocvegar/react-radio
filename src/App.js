import { useState, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import Radio from "./components/Radio";

function App() {
  const [state, setState] = useState(100);

  const doubled = useMemo(() => {
    return state ** 2;
  }, [state]);

  const clicked = () => {
    setState((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>Super-Duper Radio Player</h1>
      <h2>Pick a genre, choose a station, start listening</h2>
      <Radio />
    </div>
  );
}

export default App;
