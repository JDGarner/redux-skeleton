import React from 'react';

class Quote extends React.Component {

  render() {
    if (this.props.quote) {
      return (
        <div className="panel panel-default quote">
          <div className="panel-body content">'{this.props.quote.content}'</div>
          <div className="panel-footer author">{this.props.quote.author}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Quote;
