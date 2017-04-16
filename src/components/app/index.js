import React from 'react'
import QuoteList from '../../containers/quote-list'

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <QuoteList />
        <button
          className="btn btn-default"
          type="submit"
          onClick={null}>
          New Quote
        </button>
      </div>
    )
  }
}

export default App
