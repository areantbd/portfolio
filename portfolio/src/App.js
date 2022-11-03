import { Route, Routes } from "react-router-dom";
import SpeedDialComponent from "./components/UI/SpeedDialComponent";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div style={{ position: "relative" }} heigh="100%">
      <Routes>
        <Route path="/portfolio" element={<HomeScreen />} />

        <Route
          path="/calendly"
          element={() => {
            window.location.href =
              "https://areantbd.github.io/OTFN-Online-Tools-For-Noobs/";
            return null;
          }}
        />
      </Routes>
      <a
        href="https://areantbd.github.io/OTFN-Online-Tools-For-Noobs/"
        target="blank_"
      >
        Online tools for noobs
      </a>
      <div className="fixed-bottom">
        <SpeedDialComponent />
      </div>
    </div>
  );
}

export default App;
