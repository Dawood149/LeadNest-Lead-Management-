import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}> </Route>

          {/* ----------------Routes to protect */}
          <Route path="/layout" element={<Layout />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
