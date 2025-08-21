import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(null); 
  

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.get("http://localhost:8000/verify-token", {
          withCredentials: true, 
        });

        if (res.data.success === true) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        console.error("Token verification failed: ", err);
        setIsAuth(false);
      }
    };

    verifyToken();
  }, []);

  if (isAuth === null) {
    return <Loader/>
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
