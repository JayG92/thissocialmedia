import React from 'react';
import "./style.css"
import { Jumbotron, Container } from 'reactstrap';
import logo from "../../imgs/this.png";


class Feed extends React.Component {



render(){
return(

    <div>
      <Jumbotron className="feed" fluid>
        <Container fluid>
          <h1 className="display-3">My code doesnt work</h1>
            <div className="feedcard">
            <ul>
            <img src={logo} alt="text"/>
                <ul>post category</ul>
                <ul>HERE IS MY POST</ul>
                <ul>date</ul>

            </ul>
            </div>
            <div className="feedcard">
            <ul>
            <img src={logo} alt="text"/>
                <ul>post category</ul>
                <ul>HERE IS MY POST</ul>
                <ul>date</ul>
            </ul>
            </div>
            <div className="feedcard">
            <ul>
            <img src={logo} alt="text"/>
                <ul>post category</ul>
                <ul>HERE IS MY POST</ul>
                <ul>date</ul>

            </ul>
            </div>


        
        </Container>
      </Jumbotron>
    </div>


)

}

}

export default Feed