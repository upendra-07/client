import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import Login from "./Screens/Login/Login";
import Home from "./Screens/Home/Home";
import WelcomePage from "./Screens/WelcomePage/WelcomePage";
import SignUp from "./Screens/SignUp.jsx/SignUp";
import "./App.css";

const App = () => {
  // A mock function to simulate authentication status check
  const isAuthenticated = () => {
    // Replace with your actual logic for checking if a user is authenticated
    return !!localStorage.getItem("authToken");
  };

  const PrivateRoute = ({ element }) => {
    const location = useLocation();
    return isAuthenticated() ? (
      element
    ) : (
      <Navigate to="/login" state={{ from: location }} />
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Default Route */}
      </Routes>
    </Router>
  );
};

export default App;
