import React, { Component } from 'react';
// import 'App.css';
import { Input, FormBtn } from "../Form";
import { Nav} from "../Nav";
import {Container, Row, Col} from "../Grid";




// GET https://www.googleapis.com/books/v1/volumes?q=quilting



class SearchBook extends Component {

  state = {
    books: [],

    input:{
      title:"",
      author:"",
      topic:""
    }
  }
  
  componentDidMount(){
    fetch("https://www.googleapis.com/books/v1/volumes?q=quantum").then(data => {
      return data.json()
    }).then(data => {
      console.log(data)
      this.setState({books:data.items})
    } )
  }


  

  saveBook(event){
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

  handleChange = (event)=> {
    event.preventDefault();
    // console.log(event.target.name);
    let input =this.state.input;
    // console.log(input);

    if ( event.target.name === "title"){
      input.title = event.target.value;
      this.setState({input:input});
      // console.log(this.state);      
    }
     else if ( event.target.name === "author"){
      input.author = event.target.value;
      this.setState({input:input});
      // console.log(this.state);      
    }
    else if ( event.target.name === "topic"){
      input.topic = event.target.value;
      this.setState({input:input});
      // console.log(this.state);      
    }    

  }

  handleSubmit= (event)=> {
    event.preventDefault();
    console.log(this.state.input);

  }

  

  render() {

    // var searchbook = 

    var displaybooks = this.state.books.map ((eachitem, index) => 
    <div key={index}> 
      <h2> {eachitem.volumeInfo.title}</h2>
      <p> {eachitem.volumeInfo.authors[0]} </p> <button onClick={this.saveBook} data-title={eachitem.volumeInfo.title} data-author={eachitem.volumeInfo.authors[0]} data-description={eachitem.volumeInfo.description}> Save </button>
    </div>
    ) 

    return (

      <div className="App">

           <Nav> </Nav>

           <form>
              <Input onChange = {this.handleChange} name="title" placeholder="Title..." />
              <Input onChange = {this.handleChange} name="author" placeholder="Author... " />
              <Input onChange = {this.handleChange} name="topic" placeholder="Topic... " />
              <FormBtn onClick={this.handleSubmit}>Search</FormBtn>
            </form>


      
      <h1> Books Search </h1>

      {/* <Row> test </Row> */}
      <Col size="md-6 sm-12">       
          <p> {displaybooks} </p>     
       </Col>



      </div>

    );
  }
}

export default SearchBook;
