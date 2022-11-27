import "./App.css";
import NavBar from "./Components/NavBar";
import BgImage from "./Components/BgImage";
import Contact from "./Contact";
import Error from "./Error";
import Gallery from "./Gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<BgImage />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        ;
      </BrowserRouter>
    </>
  );
}

export default App;
