import React, { useState } from 'react';
import "./style.css"
import { CardText, Form, FormGroup, Input, Button } from 'reactstrap';
import { withContext } from '../../context';


function MessageFeed({ users }) {

    return (
        <>
                    {users.map(user => (

            <div className="memberMessages">
                <div className="messageContainer">
                    <div className="messageBody"> {user.userPosts.messages} Message goes here</div>
                    <div className="messagePost border-top">
                        
                    </div>
                </div>
           
            </div>
                    )
            )}     
        </>
   
    )
}
export default withContext(MessageFeed)


// onClick={this.handleFormSubmit}

// onChange={this.handleInputChange}

// value={this.state.messages} 
// {this.props.userposts}