import React from 'react';
import "./style.css"
import { Button, CardText, Jumbotron, Collapse,CardBody, } from 'reactstrap';


// function Feed(props) {
//     const posts = props.posts;

function Feed({ posts }) {
    return (
            <div className="text-center">
                {posts.map(post => (
                    <div>

                    <Jumbotron className="feed" fluid >

                            <strong className="username">
                            User Name{post.user}
                            </strong>
                        <CardText className="post-content">
                        <img id="feed-image" src="https://via.placeholder.com/100" alt="Profile"></img>

                            <br></br>
                            <strong className="post-title">
                            {post.title}
                            </strong>
                            
                            <br></br>
                            <p className="post-body">
                            {post.body}</p>
                            <br></br>
                        </CardText>
                        </Jumbotron >
                    </div>
                )
                )}
            </div>
    )
}



export default Feed
