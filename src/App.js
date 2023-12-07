
import './App.css';
import Requests from './Components/Requests';
import Correspondence from './Components/Correspondence';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Requests />} />
        <Route path="/Correspondence" element={<Correspondence />} />
      </Routes>
    </Router>
  );
}

export default App;
