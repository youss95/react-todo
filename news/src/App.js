import React, { useCallback, useState } from "react";
import axios from "axios";
import "./App.css";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
//e6b50f54ec22440ca7fa32bb746ad6e7
const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => {
    setCategory(category);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </>
  );
};

export default App;
