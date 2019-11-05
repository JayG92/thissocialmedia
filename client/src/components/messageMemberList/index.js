import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import { withContext } from "../../context/"
import "./style.css"

class MemberList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            value: "",
            email: "",
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            email: props.email,
        })
    }

    memberList = e => {
        const testing = this.props.email
        console.log(testing)
    }

    render() {
        return (
            <div className="memberList">
                <div className="text-center">
                    <CardText className="">
                        <a onClick={this.memberList}><strong className="memberListEmail">{this.props.email}</strong></a>
                    </CardText>
                </div>
            </div>
        )
    }
}


export default withContext(MemberList);
