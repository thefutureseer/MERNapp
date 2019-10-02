import { GET_BOOKS, ADD_BOOK, DELETE_BOOK } from './types';

export const getBooks = () => {
  return {
    type: GET_BOOKS
  };
};

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id
  };
};