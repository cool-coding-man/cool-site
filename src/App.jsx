import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header/Header.jsx";
import Home from "./pages/home/index.jsx";
import Fade from "./pages/fade/index.jsx";
import Scroll from "./pages/scroll/index.jsx";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/fade" element={<Fade />} />
        <Route path="/scroll" element={<Scroll />} />
      </Routes>
    </Router>
  );
};

export default App;
