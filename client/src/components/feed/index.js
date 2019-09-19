import React from 'react';
import "./style.css"
import { Button, CardText, Jumbotron, } from 'reactstrap';
import logo from "../../imgs/this.png";


class Feed extends React.Component {
    state = {
        user:"username",
        title: "",
        body: "Woof, react is kinda tough!",
        
    }


    render() {
        return (

            <Jumbotron className="feed" fluid >
             <div className="text-center">

                      <CardText>
                

            <strong>{this.state.user}</strong>
            <br></br>
            {this.state.title}
            <br></br>
            {this.state.body}
            <br></br>
            {this.state.time}
            <br></br>
            <hr/>
            </CardText>
            <Button>comment</Button>
            <input></input>
            </div>
            </Jumbotron >

        )

    }

}

export default Feed
