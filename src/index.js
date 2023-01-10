import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import Form from './pages/form/form';
// import Navbar from './components/Navbar/Navbar';
import ErrorPage from './pages/errorPage/errorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
