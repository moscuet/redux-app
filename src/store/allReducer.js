import counterReducer from './counterReducer'
import nameReducers from './nameReducer'
import backgroundReducer from './backgroundReducer'
import bookReducer from './bookReducer'
import countriesReducer  from './countriesReducer'
import { combineReducers } from 'redux'
 const allReducers = combineReducers({
        counter:counterReducer,
        name:nameReducers,
        background:backgroundReducer,
        book:bookReducer,
        countries: countriesReducer})
export default allReducers
