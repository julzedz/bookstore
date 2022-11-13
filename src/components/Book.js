import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { bookelement } = props;
  const { title, author, id } = bookelement;
  const dispatch = useDispatch();
  const handledelete = (bookid) => {
    dispatch(removeBook(bookid));
  };
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <input
        type="button"
        value="Remove"
        onClick={() => handledelete(id)}
      />
    </div>
  );
};

Book.propTypes = {
  bookelement: propTypes.isRequired,
};

export default Book;
