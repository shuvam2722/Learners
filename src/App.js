import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { HeroPage, AboutPage, CoursePage } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </div>
  );
}

export default App;
