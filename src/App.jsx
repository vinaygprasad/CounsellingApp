import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Book } from "./Pages/Book";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/book" element={<Book/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}
