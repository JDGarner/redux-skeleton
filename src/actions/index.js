const FETCH_QUOTES_REQUEST = 'FETCH_QUOTES_REQUEST'
const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS'
const FETCH_QUOTES_FAILURE = 'FETCH_QUOTES_FAILURE'
const RESET_QUOTES = 'RESET_QUOTES'
const QUOTES_API_URL = 'http://localhost:3001/quotes'

export const fetchQuotesRequest = request => ({
  type: FETCH_QUOTES_REQUEST
})

export const fetchQuotesSuccess = quotes => ({
  type: FETCH_QUOTES_SUCCESS,
  payload: quotes
})

export const fetchQuotesFailure = error => ({
    type: FETCH_QUOTES_FAILURE,
    payload: error
})

export const fetchQuotes = () => dispatch => {
  dispatch(fetchQuotesRequest())

  return fetch(QUOTES_API_URL)
    .then(res => res.json())
    .then(data => dispatch(fetchQuotesSuccess(data)))
    .catch(err => dispatch(fetchQuotesFailure(err)))
}
