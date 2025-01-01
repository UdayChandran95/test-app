import About from "./About/About";
import HomePage from "./Homepage/HomePage";
import Contact from "./Contact/Contact"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from "./Services/Services";
import Gallery from "./Gallery/Gallery";
import ServicePage from "./ServicePage/ServicePage";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/servicepage" element={<ServicePage />} />
    </Routes>
    </Router>
  );
}

export default App;
