import uuid from 'uuid';
import { GET_BOOKS, ADD_BOOK, DELETE_BOOK } from '../actions/types';

const initialState = {
    books: [
      { id: uuid(), name: "Part 3 Star Wars"},
      { id: uuid(), name: "Widow in the woods"},
      { id: uuid(), name: "Sleepy Hallow"},
      { id: uuid(), name: "Halloween 2"}
    ]
}
export default function(state = initialState, action) {
  switch (action.type) {
   case GET_BOOKS:
     return {
       ...state
     };
   case DELETE_BOOK:
     return {
       ...state,
       books: state.books.filter(book => book.id !== action.payload)
     };
   case ADD_BOOK:
     return {
       ...state,
       books: [action.payload, ...state.books]
     };
   default:
     return state;
  }
}
