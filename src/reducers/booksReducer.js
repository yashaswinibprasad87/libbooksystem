const booksReducer = (state = [], action) =>  {
  switch(action.type) {
    case 'ADD_BOOKS':
	 return state.concat([action.data]);
    default:
      return state;
  }
}
export default booksReducer;