import ActionTypes from '../constants/action-types'
import apiConstants from '../constants/api'

const fetchQuotesRequest = request => ({
  type: ActionTypes.FETCH_QUOTES_REQUEST
})

const fetchQuotesSuccess = quotes => ({
  type: ActionTypes.FETCH_QUOTES_SUCCESS,
  payload: quotes
})

const fetchQuotesFailure = error => ({
    type: ActionTypes.FETCH_QUOTES_FAILURE,
    payload: error
})

export const fetchQuotes = () => dispatch => {
  dispatch(fetchQuotesRequest())

  return fetch(apiConstants.QUOTES_API_URL)
    .then(res => res.json())
    .then(data => dispatch(fetchQuotesSuccess(data)))
    .catch(err => dispatch(fetchQuotesFailure(err)))
}
