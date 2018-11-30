import React, { Component } from 'react';
import SearchBook  from "../src/components/pages/SearchBook";
import SaveBook  from "../src/components/pages/SearchBook";
import Nav from "../src/components/Nav";
import {Container, Row, Col} from "../src/components/Grid";

import Jumbotron  from "../src/components/Jumbotron";



class App extends Component { 

render () { 

  return ( 

    <Container> 

      <div>
           <Nav> </Nav>
    
            <Jumbotron />
                <h1> Welcome to BookSearch@ </h1>  
                <h2> React Google Books Search</h2>      
            <Jumbotron />

            <SearchBook />
            {/* <SaveBook /> */}

      </div>    

    </Container>


  

  )
}
}
export default App;
