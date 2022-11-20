/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { fetchBooks } from '../redux/books/books';
import '../App.css';

const Bookspage = () => {
  const currentBooks = useSelector((state) => state.GetBookSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <div className="bookspage">
      <div className="library">
        {Object.keys(currentBooks.bookList).map((book) => (
          <Book bookelement={currentBooks.bookList[book][0]} key={book} id={book} />
        ))}
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
};
export default Bookspage;
