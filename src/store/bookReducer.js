import {books }from './data/books'

const initialState = {
  books: books,
  selectedBook: null
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_BOOK':
      return { ...state, selectedBook: books[action.payload.index] }
    default:
      return state
  }
}

export default bookReducer