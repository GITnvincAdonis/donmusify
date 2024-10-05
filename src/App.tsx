import { useEffect } from "react";
import "./App.css";

import IntroPage from "./Components/IntroPage";
import MusicPage from "./Components/MusicPage";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  function changeToSelected(color: string) {
    document.body.style.backgroundColor = color;
  }
  useEffect(() => {
    navigate("/home");
  }, []);
  useEffect(() => {
    console.log(location);
    location == "/music-interface"
      ? changeToSelected("black")
      : changeToSelected("white");
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/home" element={<IntroPage />} />
        <Route path="/music-interface" element={<MusicPage />} />
      </Routes>
    </>
  );
}

export default App;
