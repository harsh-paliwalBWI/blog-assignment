import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogPage />} />
    </Routes>
  );
}
