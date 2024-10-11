import { useEffect } from "react";
import "./App.css";

import IntroPage from "./Components/IntroPage";
import MusicPage from "./Components/MusicPage";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const AnimateLocation = useLocation();
  function changeToSelected(color: string) {
    document.body.style.backgroundColor = color;
  }
  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          console.log("unmoutuned");
          console.log(location);
          location == "/music-interface"
            ? changeToSelected("black")
            : changeToSelected("white");
        }}
      >
        <Routes location={AnimateLocation} key={AnimateLocation.key}>
          <Route path="/home" element={<IntroPage />} />
          <Route path="/music-interface" element={<MusicPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
