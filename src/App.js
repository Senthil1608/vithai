import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './home/HomePage';  // Import HomePage here

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
