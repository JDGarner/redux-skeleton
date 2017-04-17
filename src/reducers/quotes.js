import ActionTypes from '../constants/action-types'
import { sample } from 'lodash'

const initialState = {
  quotes: [],
  currentQuote: null,
  loadingQuotes: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.FETCH_QUOTES_REQUEST:
      return {
        ...state,
        loadingQuotes: true,
      }
    case ActionTypes.FETCH_QUOTES_SUCCESS:
      return {
        ...state,
        loadingQuotes: false,
        quotes: action.payload,
        currentQuote: sample(action.payload)
      }
    case ActionTypes.FETCH_QUOTES_FAILURE:
      return {
        ...state,
        loadingQuotes: false,
        error: action.payload
      }
    case ActionTypes.RESET_QUOTES:
      return initialState;
    default:
      return state;
  }
}
