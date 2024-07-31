import HomePage from "./Homepage/HomePage";
import About from "./About/About";
import Services from "./Services/Services";
import ServicePage from "./Services/ServicePage";
import Blog1 from "./Blog/Blog1";
import Blog2 from "./Blog/Blog2";
import Blog3 from "./Blog/Blog3";
import Gallery from "./Gallery/Gallery";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/servicepage" element={<ServicePage />} />
      <Route path="/blog1" element={<Blog1 />} />
      <Route path="/blog2" element={<Blog2 />} />
      <Route path="/blog3" element={<Blog3 />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
    </Router>
  );
}

export default App;
