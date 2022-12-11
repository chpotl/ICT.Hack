import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Footer } from "../components/Footer/Footer"
import { Navbar } from "../components/Navbar/Navbar"
import { AppBody } from "./AppBody"
import { CreateProject } from "./CreateProject/CreateProject"
import { Home } from "./Home/Home"
import { Profile } from "./Profile/Profile"
import { Project } from "./Project/Project"
import { UpdateProfile } from "./UpdateProfile/UpdateProfile"
import Cookies from "js-cookie"

function App() {
  return (
    <Router>
      <AppBody>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile-update' element={<UpdateProfile />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/create-project' element={<CreateProject />} />
        </Routes>
      </AppBody>
    </Router>
  )
}

export default App
