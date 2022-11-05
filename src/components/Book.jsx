import React from 'react';
import propTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <input type="button" value="Remove" />
    </div>
  );
};

Book.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};

export default Book;
