import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./LandingPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MathsPage from "./components/MathsPage";
import EnglishPage from "./components/EnglishPage";
import EnglishKeyStage from "./components/EnglishKeyStage";
import Accordian from "./components/Accordian";
import Offers from "./components/Offers";
import AboutPage from "./components/AboutPage";
import Offerpage from "./components/Offerpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landingpage />} />
        <Route path="/home" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/maths" element={<MathsPage />} />
        <Route path="/english" element={<EnglishPage />} />
        <Route path="/englishkey" element={<EnglishKeyStage />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/offer" element={<Offerpage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404 PAGE</h1>
              <h1>PAGE NOT FOUND</h1>
              <p>PLEASE CHECK THE LINK ADDRESS</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
