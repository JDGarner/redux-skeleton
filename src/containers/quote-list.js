import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchQuotes } from '../actions'
import Quote from '../components/quote'

class QuoteList extends React.Component {

  componentDidMount() {
    this.props.fetchQuotes()
  }

  renderQuoteList(quotes) {
    return quotes.map((quote, key) => {
      return (
        <Quote key={key} quote={quote} />
      )
    })
  }

  render() {
    let quotesList = this.props.quotes.quotes

    if (quotesList && quotesList.length > 0) {
      return (
        <div className="quote-list">
          {this.renderQuoteList(quotesList)}
        </div>
      )
    } else if (this.props.quotes.loadingQuotes) {
      return (
        <div>Waiting for quotes</div>
      )
    } else if (this.props.quotes.error) {
      return (
        <div>Error fetching quotes: {this.props.quotes.error.message}</div>
      )
    } else {
      return null
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
