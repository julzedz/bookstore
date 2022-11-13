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
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="title"
        value={inputText.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="author"
        value={inputText.author}
        onChange={handleChange}
        placeholder="Author"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
