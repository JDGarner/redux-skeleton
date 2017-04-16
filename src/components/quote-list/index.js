import React from 'react'
import Quote from '../quote'

class QuoteList extends React.Component {

  render() {
    if (this.props.quotes) {
      return (
        <div className="quotes-list">
            {
              this.props.quotes.map((key, quote) => {
                return <Quote key={key} quote={quote} />
              })
            }
        </div>
      )
    } else {
      return null
    }
  }
}
export default QuoteList
