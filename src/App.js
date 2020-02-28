import React ,{Component}from 'react';
import AddBooksForm from './AddBooksForm';
import AllBooks from './AllBooks';


class App extends Component {
  render() {
    return (
	
    <div className="App" align="center">
        <AddBooksForm /><br/>
		<h4> All Books</h4>
        <AllBooks />
    </div>
    );
    }
  }
export default App;
