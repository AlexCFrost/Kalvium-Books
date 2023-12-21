import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Book from './Components/Book';
import Form from './Components/Form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
