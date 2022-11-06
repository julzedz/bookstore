import React from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

const Bookspage = () => (
  <div className="bookspage">
    <div className="library">
      <Book title="Book1" author="Julz" />
    </div>
    <div className="form">
      <Form />
    </div>
  </div>
);

export default Bookspage;
