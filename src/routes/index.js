import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import AddBook from "../fetaures/books/AddBook";
import BooksView from "../fetaures/books/BooksView";
const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/show-books" element={<BooksView />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
