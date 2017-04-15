import React from 'react';
import Quote from '../quote';
import _ from 'lodash';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      quotes: [],
      currentQuote: null
    };
  }

  componentDidMount() {
    const url = 'http://localhost:3001/quotes';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          quotes: data,
          currentQuote: _.sample(data)
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getNewQuote() {
    this.setState({
      currentQuote: _.sample(this.state.quotes)
    });
  }

  render() {
    return (
      <div className="app">
        <Quote quote={this.state.currentQuote} />
        <button
          className="btn btn-default"
          type="submit"
          onClick={this.getNewQuote.bind(this)}>
          New Quote
        </button>
      </div>
    );
  }
}

export default App;
