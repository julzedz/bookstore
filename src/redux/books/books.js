// actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// action creators
export function addBooks(book) {
  return { type: ADD_BOOK, payload: book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, payload: id };
}

// reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}

