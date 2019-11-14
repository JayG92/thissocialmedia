import React from 'react';
import { Card, CardBody, CardText, Form, FormGroup,Input, Button } from 'reactstrap';
import { withContext } from "../../context/"
import "./style.css"
import API from "../../utils/API";

class MessageButton extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            value: "",
            email: "",
        };
    }


    componentWillReceiveProps(props) {
        this.setState({
          _id: props._id,
          email:props.email
        })
      }
    

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        let email = this.props.user.email;
        event.preventDefault();
    
        if (this.state.messages) {
          let test=this.state.userPosts.concat([{messages: this.state.messages}])
          API.saveUser({
          messages:this.state.messages
          })
          API.updateUser(email, {
            userPosts: test
        })
    
            .then(res => this.loadPost(),this.clearInputs())
            .catch(err => console.log(err));
        }
      };
    

    render() {
        return (
            <>
            <Form className="formMessage">


            <FormGroup>
                <Input
                 onChange={this.handleInputChange}

                    value={this.state.messages} 
                    type="message"
                    name="messages"
                    id="textMessage"
                    placeholder="Type a message" />
            </FormGroup>
        </Form>
        <Button onClick={this.handleFormSubmit}
className="submitMessage" color="primary">Send</Button>
            </>
        
        )
}
}


export default withContext(MessageButton)
