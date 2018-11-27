import React, { Component } from 'react';
import './App.css';
import { Input, TextArea, FormBtn } from "../src/components/Form";
import { Nav} from "../src/components/Nav";



// GET https://www.googleapis.com/books/v1/volumes?q=quilting



class App extends Component {

  state = {
    books: []
  }
  
  componentDidMount(){
    fetch("https://www.googleapis.com/books/v1/volumes?q=quilting").then(data => {
      return data.json()
    }).then(data => {
      console.log(data)
      this.setState({books:data.items})
    } )
  }

  save(event){
    var payload = {
        title: event.target.dataset.title,
        author: event.target.dataset.author,
        description: event.target.dataset.description
    };
    
    
    console.log(payload);  

  // fetch('http://localhost:3000/path', {
  //   method: 'POST',
  //   body: JSON.stringify(payload),
  //   headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //   }
  // })
  // .then(response => {
  //   return response.json()
  // })
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(message => {
  //   console.log(message);
  // })
  }


  render() {


    var displaybooks = this.state.books.map ((eachitem, index) => 
    <div key={index}> 
      <h2> {eachitem.volumeInfo.title}</h2>
      <p> {eachitem.volumeInfo.authors[0]} </p> <button onClick={this.save} data-title={eachitem.volumeInfo.title} data-author={eachitem.volumeInfo.authors[0]} data-description={eachitem.volumeInfo.description}> Save </button>
    </div>
    ) 

    return (

      <div className="App">

           <Nav> </Nav>

           <form>
              <Input name="title" placeholder="Title..." />
              <Input name="author" placeholder="Author... " />
              <Input name="topic" placeholder="Topic... " />
              <FormBtn>Submit Book</FormBtn>
            </form>


      
      <h1> Books Search </h1>
        <h2> {displaybooks} </h2>  
      </div>

    );
  }
}

export default App;
