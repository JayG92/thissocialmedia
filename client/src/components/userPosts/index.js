import React, { useState } from 'react';
import "./style.css"
import { CardText } from 'reactstrap';
import { withContext } from '../../context';

class UserPosts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: "",
        };
    }

    render() {
        // if (this.props.username === "/userprofile/"+this.props.id) {}
        if (window.location.pathname === "/userprofile/" + this.props.id) {
            // var sortingPosts = this.props.userPosts
            // var testing = sortingPosts.reverse();
            return (
                <div>
                    {this.props.userPosts.map(userPost => (
                        <div>{userPost.username === this.props.user.email && window.location.pathname === "/userprofile/" + this.props.user._id ?
                            <div className="postBox">
                                <CardText>
                                    <div className="feedPadding">

                                        <div className="postUsername">
                                            @{this.props.email}
                                        </div>
                                        {/* <div> { title.length >= 1 ? <div className="projectTag"><i className="far fa-star"></i> Project</div> : ""} </div> */}
                                        <hr className="feedHr"></hr>
                                        <h3></h3>
                                        <div className="postBody">{userPost.body}</div>

                                        {/* <div> { projectLink.length >= 1 ? <div><br></br><br></br><small className="projectLink">Project Link: <a target="_blank" href={"https://" + projectLink}>{projectLink}</a></small></div> : ""} </div> */}

                                        <br></br>
                                        <div className="Interactions"></div>
                                        <small className="text-muted likeCount">0 Like(s)</small><small className="text-muted commentCount">0 Comment(s)</small>
                                        <div className="postInteraction border-top">
                                            <div
                                                className="btn btn-link likes">
                                                <i className="far fa-thumbs-up">
                                                </i> Like(s)
                                </div>

                                            <div
                                                className="btn btn-link comments">
                                                <i className="far fa-comment">
                                                </i> Comment(s)
                                </div>
                                        </div>
                                    </div>
                                </CardText>

                            </div>
                            : ""}
                        </div>

                    )
                    )}
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        // console.log("Amount of posts: " + this.props.userPosts.length)
        // if (this.props.username === "/userprofile/"+this.props.id) {}
        if (window.location.pathname === "/userprofile/" + this.props.id) {
            return (
                <div>
                    {this.props.userPosts.map(userPost => (
                        <div>{userPost.username === this.props.email ?
                            <div className="postBox">
                                <CardText>
                                    <div className="feedPadding">

                                    <div className="postUsername">
                                            @{this.props.email}
                                        </div>
                                        {/* <div> { title.length >= 1 ? <div className="projectTag"><i className="far fa-star"></i> Project</div> : ""} </div> */}
                                        <hr className="feedHr"></hr>
                                        <h3></h3>
                                        <div className="postBody">{userPost.body}</div>

                                        {/* <div> { projectLink.length >= 1 ? <div><br></br><br></br><small className="projectLink">Project Link: <a target="_blank" href={"https://" + projectLink}>{projectLink}</a></small></div> : ""} </div> */}

                                        <br></br>
                                        <div className="Interactions"></div>
                                        <small className="text-muted likeCount">0 Like(s)</small><small className="text-muted commentCount">0 Comment(s)</small>
                                        <div className="postInteraction border-top">
                                            <div
                                                className="btn btn-link likes">
                                                <i className="far fa-thumbs-up">
                                                </i> Like(s)
                            </div>

                                            <div
                                                className="btn btn-link comments">
                                                <i className="far fa-comment">
                                                </i> Comment(s)
                            </div>
                                        </div>
                                    </div>
                                </CardText>

                            </div>
                            : ""}
                        </div>

                    )
                    )}
                </div>
            )
        } else {
            return null
        }
    }
}

export default withContext(UserPosts)