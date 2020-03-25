const countriesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'FETCH_COUNTRIES':
      return payload.countries
    default:
      return state
  }
}

export default countriesReducer