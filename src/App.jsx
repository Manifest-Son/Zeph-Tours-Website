import "./assets/global.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Trips from "./pages/Trip/Trip";
import Footer from "./components/Footer/Footer";
import Destination from "./pages/Destination/Destination";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
