import Home from "./components/Home"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Appointment from "./components/Appoinment"


function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
