 function counterReducer(state = 1, action) {
  switch (action.type) {
    case 'PLUS_ONE':
      return state + 1

    case 'MINUS_ONE':
      return state - 1

    default:
      return state
  }
}
export default counterReducer
