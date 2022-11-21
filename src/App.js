import "./App.css";
import NavBar from "./Components/NavBar";
import BgImage from "./Components/BgImage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />
      <BgImage />
    </div>
  );
}

export default App;
