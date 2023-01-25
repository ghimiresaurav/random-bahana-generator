import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import ImageStripContainer from "./Components/ImageStripContainer";
import DarkFilm from "./Components/DarkFilm";
import Wrapper from "./Components/Wrapper";
import GlobalContext from "./contexts/GlobalContext";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)",
  });

  const [showBahanaModal, setShowBahanaModal] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        showBahanaModal,
        setShowBahanaModal,
        thinking,
        setThinking,
        success,
        setSuccess,
        isMobile,
      }}
    >
      <ImageStripContainer />
      <DarkFilm />
      <Wrapper />
    </GlobalContext.Provider>
  );
}

export default App;
