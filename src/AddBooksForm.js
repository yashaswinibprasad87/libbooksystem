import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Avatar, Button, Icon, ListItemIcon, ListItemText, Popover, MenuItem, Typography } from '@material-ui/core';
class AddBooksForm extends Component {
	handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const desc =  this.getdescription.value;
	const count =  this.getCount.value;
	const author =  this.getAuthor.value;
    const data = {
      id: new Date(),
      title,
      desc,
	  count,
	  author
    }
	console.log(data)
	this.props.dispatch({
      type:'ADD_BOOKS',
      data});
    this.getTitle.value = '';
    this.getdescription.value = '';
	this.getCount.value = '';
	this.getAuthor.value = '';
  }
  
render() {
return (
<div align="center">
  <h4>Create Books</h4>
  <form align="center" onSubmit={this.handleSubmit}>
   <input required type="text" placeholder="Enter Book Name" ref={(input)=>this.getTitle = input} /><br /><br />
   
   <textarea required rows="5" cols="28" placeholder="Enter Description" ref={(input)=>this.getdescription = input} /><br /><br />
   Number Of books: <input required type="number" min="1" max="20" ref={(input)=>this.getCount = input}/><br /><br />
   <input required type="text" placeholder="Enter Book Author" ref={(input)=>this.getAuthor = input}/><br /><br />
     <Button variant="contained" color="primary" onClick={this.handleSubmit}>                            
                            <div className="apply-white hidden md:flex flex-col ml-12 items-start">
                                <Typography component="span" className="apply-white normal-case font-600 flex">
                                  Add
                                </Typography>
                            </div>

          </Button>

  </form>
</div>
);
}
}
export default connect()(AddBooksForm);