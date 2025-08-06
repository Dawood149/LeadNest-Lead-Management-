import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/layout/Layout"
import Leads from "./pages/Leads"
import Tasks from "./pages/Tasks"
import Appointments from "./pages/Appointments"

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}> </Route>

          {/* ----------------Routes to protect */}
          <Route path="/" element={<Layout />}>

            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/leads" element={<Leads />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/appointments" element={<Appointments/>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
