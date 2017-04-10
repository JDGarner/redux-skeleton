import React from 'react';
import Quote from '../quote';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      quoteContent: '',
      quoteAuthor: ''
    };
  }

  componentDidMount() {
    const url = 'http://localhost:3001/random-quote';

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          quoteContent: data.content,
          quoteAuthor: data.author
        });
      });
  }

  render() {
    return (
      <Quote
        content={this.state.quoteContent}
        author={this.state.quoteAuthor} />
    );
  }
}

export default App;
