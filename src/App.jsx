import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Login from "./pages/login";
import Userauthroute from "./utils/auth/Userauthroute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Userauthroute />}>
          <Route path="/blog" element={<Blog />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
