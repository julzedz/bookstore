import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { bookelement, id } = props;
  const { title, author } = bookelement;
  const dispatch = useDispatch();
  const handledelete = (bookid) => {
    dispatch(removeBook(bookid));
  };
  return (
    <div className="eachbook">
      <div className="abook">
        <h3 className="booktitle">{title}</h3>
        <p className="bookauthor">{author}</p>
        <input className="bkbtn" type="button" value="Comment" />
        <input
          className="bkbtn"
          type="button"
          value="Remove"
          onClick={() => handledelete(id)}
        />
        <input className="bkbtn" type="button" value="Edit" />
      </div>
      <div className="perc">
        <p className="percent">64%</p>
        <p className="comp">Completed</p>
      </div>
      <div className="update">
        <p className="chapter">CURRENT CHAPTER</p>
        <p className="chap-num">CHAPTER 17</p>
        <input className="submitbutton" type="submit" value="UPDATE PROGRESS" />
      </div>
    </div>
  );
};

Book.propTypes = {
  bookelement: propTypes.isRequired,
  id: propTypes.isRequired,
};

export default Book;
