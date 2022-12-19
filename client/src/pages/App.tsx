import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import { AppBody } from "./AppBody"
import { Home } from "./Home/Home"
import { Project } from "./Project/Project"
import { useToken } from "../hooks/useToken"
import { Suspense, lazy } from "react"

const Profile = lazy(() => import("./Profile/Profile"))
const UpdateProfile = lazy(() => import("./UpdateProfile/UpdateProfile"))
const CreateProject = lazy(() => import("./CreateProject/CreateProject"))

function App() {
  const { token, setToken } = useToken()

  return (
    <Router>
      <AppBody token={token} setToken={setToken}>
        <Suspense fallback={<h1>loading...</h1>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project/:id' element={<Project />} />
            {token && (
              <>
                <Route path='/profile' element={<Profile />} />
                <Route path='/profile-update' element={<UpdateProfile />} />
                <Route path='/create-project' element={<CreateProject />} />
              </>
            )}
          </Routes>
        </Suspense>
      </AppBody>
    </Router>
  )
}

export default App
