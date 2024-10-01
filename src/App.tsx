import "./App.css";


import IntroPage from "./Components/IntroPage";
import MusicPage from "./Components/MusicPage";

import { Route, Routes } from "react-router-dom";
import.meta.env.VITE_CLIENT_ID;
import.meta.env.VITE_CLIENT_SECRET;
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/music-interface" element={<MusicPage />} />
      </Routes>
    </>
  );
}

export default App;
