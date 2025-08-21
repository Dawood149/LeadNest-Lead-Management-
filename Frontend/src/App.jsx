import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/layout/Layout";
import Leads from "./pages/Leads";
import Tasks from "./pages/Tasks";
import Appointments from "./pages/Appointments";
import Agents from "./pages/Agents";
import GetStarted from "./pages/GetStarted";
import ProtectedRoute from "./components/protectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="get-started" element={<GetStarted />}></Route>

          {/* ----------------Routes to protect */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/agents" element={<Agents />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
