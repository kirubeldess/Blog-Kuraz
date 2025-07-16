import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";
import AddBlog from "./pages/AddBlog";
import Userauthroute from "./utils/auth/Userauthroute";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Userauthroute />}>
          <Route path="/blog" element={<Blog />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
