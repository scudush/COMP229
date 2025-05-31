import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      {/* ✅ Required for HashRouter to match root path */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      {/* ✅ Fallback route for any unmatched paths */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
