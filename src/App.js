import { useState } from "react";
import "./App.css";
import ImageStripContainer from "./Components/ImageStripContainer";
import DarkFilm from "./Components/DarkFilm";
import Wrapper from "./Components/Wrapper";
import GlobalContext from "./contexts/GlobalContext";

function App() {
  const [showBahanaModal, setShowBahanaModal] = useState(false);
  return (
    <GlobalContext.Provider value={{ showBahanaModal, setShowBahanaModal }}>
      <ImageStripContainer />
      <DarkFilm />
      <Wrapper />
    </GlobalContext.Provider>
  );
}

export default App;
