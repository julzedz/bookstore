import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

const Bookspage = () => {
  const currentBooks = useSelector((state) => state.books);
  return (
    <div className="bookspage">
      <div className="library">
        {currentBooks.bookList.map((book) => (
          <Book title={book.title} author={book.author} key={book.id} />
        ))}
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
};
export default Bookspage;
