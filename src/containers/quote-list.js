import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchQuotes } from '../actions'

class QuoteList extends React.Component {

  componentDidMount() {
    this.props.fetchQuotes()
  }

  renderQuoteList() {
    return this.props.quotes.quotes.map((quote, key) => {
      return (
        <div key={key}>{quote.content}</div>
      )
    })
  }

  render() {
    if (this.props.quotes) {
      return (
        <div>
          {this.renderQuoteList()}
        </div>
      )
    } else {
      return (
        <div>Waiting for quotes</div>
      )
    }
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchQuotes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteList)
