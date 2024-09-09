import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import NewsPage from './pages/NewsPage/NewsPage';
import AccountPage from './pages/AccountPage/AccountPage';

function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
           <Route path="/" element={<NewsPage />} />
           <Route path="/register" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
