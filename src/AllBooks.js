import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import { makeStyles } from '@material-ui/core/styles';
import { Table ,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
	TableContainer,
    Tooltip,
    withStyles
} from '@material-ui/core';

import Paper from '@material-ui/core/Paper';


class AllBooks extends Component {
	
  render() {
	
    return (
	// <div align="center">
     // <h4>All Books</h4>
	  // {console.log(this.props.books)}
	 // {this.props.books.map((book) => <Book key={Book.id} book={book} />)}
	  
   // </div>
    
	 <TableContainer component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
           
            <TableCell align="center">Book Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Number of Books</TableCell>
            <TableCell align="center">Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {this.props.books.map((book, index) => (
            <TableRow key={index} >
              <TableCell component="th" scope="row">
                {book.title}
              </TableCell>
           
              <TableCell align="center">{book.desc}</TableCell>
              <TableCell align="center">{book.count}</TableCell>
              <TableCell align="center">{book.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
   }
}

const mapStateToProps = (state) => {
    return {
        books: state
    }
}
export default connect(mapStateToProps)(AllBooks);