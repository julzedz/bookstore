import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/books';

const Form = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { ...inputText, item_id: uuidv4(), category: 'Fiction' };
    dispatch(addBooks(newBook));
  };
  return (
    <div>
      <div className="addbook">
        <p>ADD A NEW BOOK</p>
      </div>
      <form className="myform" onSubmit={handleSubmit}>
        <input
          className="titleinput"
          type="text"
          name="title"
          value={inputText.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          className="authorinput"
          type="text"
          name="author"
          value={inputText.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <input className="submitbutton" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default Form;
