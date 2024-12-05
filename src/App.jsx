import Home from "./components/Home"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Body from "./components/Body"
import Appointment from "./components/Appoinment"


function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Home /> <Body /></>} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
