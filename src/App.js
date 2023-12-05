
import './App.css';
import Requests from './Components/Requests';
import Correspondence from './Components/Correspondence';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Correspondence />} />
        <Route path="/Requests" element={<Requests />} />
      </Routes>
    </Router>
  );
}

export default App;
