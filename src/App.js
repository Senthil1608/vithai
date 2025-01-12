import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './home/HomePage';  // Import HomePage here
import About from './about/About';
import Contactus from './contactus/Contactus';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={ <Contactus />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
