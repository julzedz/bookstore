import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, key } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <input
        type="button"
        value="Remove"
        onClick={() => dispatch(removeBook(key))}
      />
    </div>
  );
};

Book.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  key: propTypes.string.isRequired,
};

export default Book;
