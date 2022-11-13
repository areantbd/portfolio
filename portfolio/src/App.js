import { ThemeContext } from "./contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/UI/nav-bar/NavBar";
import SpeedDialComponent from "./components/UI/speed-dial-component/SpeedDialComponent";
import AboutMe from "./screens/AboutMe";
import Certificates from "./screens/Certificates";
import HomeScreen from "./screens/HomeScreen";
import Projects from "./screens/Projects";

function App() {
  const [theme, setTheme] = useState(undefined)
  const mode = useContext(ThemeContext)

  useEffect(() => {
    setTheme(mode)
  }, [mode])
  console.log(mode)
  return theme?.theme === "dark" ? (
    <div
      style={{
        position: "relative",
        backgroundColor: "#252525",
        minHeight: "100vh",
        minWidth: "100vw"
      }}
      className="h-100 text-light"
    >
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
  ) : (
    <div
    style={{
      position: "relative",
      minHeight: "100vh",
      minWidth: "100vw"
    }}
    className="h-100 text-dark"
  >
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
  )
}

export default App;
