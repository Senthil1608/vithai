import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './home/HomePage';  // Import HomePage here
import About from './about/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
