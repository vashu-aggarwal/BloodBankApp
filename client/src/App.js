import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Components/Routes/ProtectedRoute";
import PublicRoute from "./Components/Routes/PublicRoute";
import Donar from "./Pages/Dashboard/Donar"
import Hospitals from "./Pages/Dashboard/Hospitals";
import Organistion from "./Pages/Dashboard/Organistion";
function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <Donar/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/organisation"
          element={
            <ProtectedRoute>
              <Organistion/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital"
          element={
            <ProtectedRoute>
              <Hospitals/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
