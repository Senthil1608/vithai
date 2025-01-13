import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './home/HomePage';  // Import HomePage here
import About from './about/About';
import Contactus from './contactus/Contactus';
import Projects from './projects/Projects';
import Gallery from './gallery/Gallery';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={ <Contactus />} />
          <Route path="/projects" element ={ <Projects />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
