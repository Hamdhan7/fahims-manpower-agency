import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./components/Nav.jsx";
import HomePage from "./components/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import {applyScrollAnimation} from "./scrollAnimation.js";

function App() {
  const [count, setCount] = useState(0)
    useEffect(() => {
        applyScrollAnimation();
    }, []);
  return (
      <Router>
          <div className="nav-section">
              <Nav />
          </div>

          <Routes>
              <Route path="/" element={<HomePage />} />
              {/*<Route path="/invoice-financing" element={<InvoiceFinancingPage />} />*/}
          </Routes>

          <div className="footer-section-container">
              <Footer />
          </div>
      </Router>  )
}

export default App
