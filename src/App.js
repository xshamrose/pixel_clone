import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import Nopage from "./pages/Nopage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Home component */}
        <Route path="/" element={<Home />} />

        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<Nopage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
