import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const quotesReducer = (state = {}, action) => {
  switch(action.type) {
    case "UPDATE_QUOTES": {
      state = {...state, quotes: action.payload};
      break;
    }
    case "UPDATE_CURRENT_QUOTE": {
      state = {...state, currentQuote: action.payload};
      break;
    }
  }
  return state;
};

const reducers = combineReducers({
  quotes: quotesReducer
});

const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, middleware);

store.dispatch((dispatch) => {
  dispatch({
    type: "TEST 1"
  });

  dispatch({
    type: "TEST 2"
  });
});

store.dispatch({
  type: "UPDATE_CURRENT_QUOTE",
  payload: {
    content: "Quote content",
    author: "Quote author"
  }
});

store.dispatch({
  type: "UPDATE_QUOTES",
  payload: [
    {
      content: "Quote content",
      author: "Quote author"
    },
    {
      content: "Quote content 2",
      author: "Quote author 2"
    }
  ]
});
