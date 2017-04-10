import React from 'react';

class Quote extends React.Component {

  render() {
    return (
      <div>
        {this.props.content} - {this.props.author}
      </div>
    );
  }
}
export default Quote;
