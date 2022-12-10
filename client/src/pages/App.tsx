import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
import { AppBody } from "./AppBody"
import { Home } from "./Home/Home"

function App() {
  return (
    <Router>
      <AppBody>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </AppBody>
    </Router>
  )
}

export default App
