import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealDetails from "./pages/MealDetails";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meal/:id" element={<MealDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
