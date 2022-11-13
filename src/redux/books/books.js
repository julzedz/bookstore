import types from '../types/types';

const initialState = {
  bookList: [
    {
      id: 1,
      title: 'Things Fall Apart',
      author: 'Chinua Achebe',
    },
    {
      id: 2,
      title: 'Purple Hibiscus',
      author: 'Chimamanda Ngozi Adichie',
    },
  ],
};

// action creators
export function addBooks(book) {
  return {
    type: types.ADD_BOOK,
    payload: book,
  };
}

export function removeBook(id) {
  return {
    type: types.REMOVE_BOOK,
    payload: id,
  };
}

// reducer
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_BOOK:
      return {
        ...state,
        bookList: [...state.bookList, action.payload],
      };
    case types.REMOVE_BOOK:
      return {
        ...state,
        bookList: [
          ...state.bookList.filter((book) => book.id !== action.payload),
        ],
      };
    default:
      return state;
  }
}
