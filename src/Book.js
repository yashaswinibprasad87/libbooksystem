import React, { Component } from 'react';

class Book extends Component {
  render() {
  return (
    <div>
      <h5>{this.props.book.title}</h5>
      <p>{this.props.book.desc}</p>
	  <p>{this.props.book.count}</p>
	  <p>{this.props.book.author}</p>
    </div>
  );
 }
}
export default Book;