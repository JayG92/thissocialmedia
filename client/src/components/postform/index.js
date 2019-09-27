import React from 'react';
import API from "../../utils/API";
import "./style.css"

import { Jumbotron, FormGroup, Label, Input, TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';


class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            title: "",
            body: "",
            projectLink: "",
            date: "",
            time: "",
            eventTitle: "",
            eventBody: "",
            likes: 0,
            isProject: false
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.title || this.state.body || this.state.projectLink) {
            API.savePost({
                title: this.state.title,
                body: this.state.body,
                projectLink: this.state.projectLink,
                likes: this.state.likes,
            })
                .then(res => this.props.loadPosts())
                .catch(err => console.log(err));
        }
    };


    handleEventSubmit = event => {
        event.preventDefault();
        if (this.state.title || this.state.body || this.state.date || this.state.time) {
            API.saveEvent({
                eventTitle: this.state.eventTitle,
                eventBody: this.state.eventBody,
                date: this.state.date,
                time: this.state.time,

            })
                .then(res => this.props.loadEvents())
                .catch(err => console.log(err));
        }
    };


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <Jumbotron className="postcard" fluid>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            <i class="far fa-file-alt fa-lg"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            <i className="fas fa-calendar-day fa-lg"></i>
                        </NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            <i className="far fa-clipboard fa-lg"></i>
                        </NavLink>
                    </NavItem>

                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <FormGroup>

                                    <div className="inputMargin"></div>
                                    <Input
                                        rows="3"
                                        className="formBox"
                                        value={this.state.body}
                                        onChange={this.handleInputChange}
                                        type="textarea"
                                        name="body"
                                        id="exampleText"
                                        placeholder="Start a post!"
                                    />
                                </FormGroup>
                                <div className="text-center">
                                    <Button className="formPostBtn" onClick={this.handleFormSubmit}>Post</Button>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>

                        </Row>
                        <div className="inputMargin"></div>
                        <Input
                            className="formBox"
                            value={this.state.eventTitle}
                            onChange={this.handleInputChange}
                            name="eventTitle"
                            placeholder="Event Name"
                            bsSize="sm" />
                        <FormGroup className="timeform">
                            <Label for="exampleDate"></Label>
                            <Input
                                className="formBox"
                                value={this.state.date}
                                onChange={this.handleInputChange}
                                type="date"
                                name="date"
                                id="exampleDate"
                                placeholder="date placeholder"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleTime"></Label>
                            <Input
                                className="formBox"
                                value={this.state.time}
                                onChange={this.handleInputChange}
                                type="time"
                                name="time"
                                id="exampleTime"
                                placeholder="time placeholder"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText"></Label>
                            <Input
                                rows="3"
                                className="formBox"
                                value={this.state.eventBody}
                                onChange={this.handleInputChange}
                                type="textarea"
                                name="eventBody"
                                id="exampleText"
                                placeholder="Description of the event"
                            />
                        </FormGroup>
                        <div className="text-center">
                            <Button className="formPostBtn" onClick={this.handleEventSubmit}>Post Event</Button>
                        </div>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <div className="inputMargin"></div>
                                <Input
                                    className="formBox"
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title"
                                    placeholder="Project title"
                                    bsSize="sm"
                                />

                                <FormGroup>
                                    <Label for="exampleText"></Label>
                                    <Input
                                        rows="3"
                                        className="formBox"
                                        value={this.state.body}
                                        onChange={this.handleInputChange}
                                        placeholder="Description of the project"
                                        type="textarea"
                                        name="body"
                                        id="exampleText"
                                    />
                                </FormGroup>
                                <p className="https">https://</p>
                                <Input 
                                    className="formBox pLink"
                                    value={this.state.projectLink}
                                    onChange={this.handleInputChange}
                                    placeholder="Link to your project"
                                    name="projectLink"
                                    
                                    />

                                <div className="text-center">
                                    <Button className="formPostBtn" onClick={this.handleFormSubmit}>Post Project</Button>
                                </div>

                            </Col>
                        </Row>
                    </TabPane>

                </TabContent>
            </Jumbotron>

        );

    }

}

export default PostForm
