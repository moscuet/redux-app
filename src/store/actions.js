import axios from 'axios'
// Action

export const plusOne = () => ({
  type: 'PLUS_ONE'
})

export const minusOne = () => ({
  type: 'MINUS_ONE'
})

export const changeName = () => ({
  type: 'CHANGE_NAME'
})

export const changeBackground = () => ({
  type: 'CHANGE_BACKGROUND'
})

export const selectedBook = index => ({
  type: 'SELECTED_BOOK',
  payload: {
    index: index
  }
})


export const changeFontSize = () => ({
  type: 'CHANGE_FONTSIZE'
})
export const changeMode = () => ({
  type: 'CHANGE_MODE'
})
export const fetchCountries = () => {
  return async dispatch => {
    const url = 'https://restcountries.eu/rest/v2/all'
    const response = await axios.get(url)
    const data = await response.data
    dispatch({
      type: 'FETCH_COUNTRIES',
      payload: {
        countries: data
      }
    })
  }
}

// export const fetchCountries = () => {
//   return dispatch => {
//     const url = 'https://restcountries.eu/rest/v2/all'
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         dispatch({
//           type: FETCH_COUNTRIES,
//           payload: {
//             countries: data
//           }
//         })
//       })
//   }
// }

// export const fetchCountries = () => {
//   return dispatch => {
//     const url = 'https://restcountries.eu/rest/v2/all'
//     const response = axios.get(url).then(response => {
//       dispatch({
//         type: FETCH_COUNTRIES,
//         payload: {
//           countries: response.data
//         }
//       })
//     })
//   }
// }

