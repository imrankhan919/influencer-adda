import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Influencer from "./pages/Influencer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/auth/admin" element={<AdminDashboard />} />
          <Route path="/auth/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/influencer/:id" element={<Influencer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </Router>
  );
};

export default App;
123;
