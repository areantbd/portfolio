import { Route, Routes } from "react-router-dom";
import NavBar from "./components/UI/nav-bar/NavBar";
import ScrollUp from "./components/UI/scroll-up/ScrollUp";
import SpeedDialComponent from "./components/UI/speed-dial-component/SpeedDialComponent";
import AboutMe from "./screens/AboutMe";
import Certificates from "./screens/Certificates";
import HomeScreen from "./screens/HomeScreen";
import Projects from "./screens/Projects";

function App() {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#252525",
        minHeight: "100vh",
      }}
      className="h-100 text-light"
    >
      <ScrollUp />
      <NavBar />

      <Routes>
        <Route path="/portfolio" element={<HomeScreen />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>

      <div className="fixed-bottom">
        <SpeedDialComponent />
      </div>
    </div>
  );
}

export default App;
