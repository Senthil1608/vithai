import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './home/HomePage';  // Import HomePage here
import About from './about/About';
import Contactus from './contactus/Contactus';
import Projects from './projects/Projects';
import Gallery from './gallery/Gallery';
import Volunteers from './volunteers/Volunteers';
import WorkCulture from './work/WorkCulture';
import Blogs from './blogs/Blog';
import Events from './events/Events';
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
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/work-culture" element={<WorkCulture />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/events" element={<Events />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
