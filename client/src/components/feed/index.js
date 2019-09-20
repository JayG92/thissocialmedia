import React from 'react';
import "./style.css"
import { Button, CardText, Jumbotron, } from 'reactstrap';


// function Feed(props) {
//     const posts = props.posts;

function Feed({ posts }) {
    return (
        <Jumbotron className="feed" fluid >
            <div className="text-center">
                {posts.map(post => (
                    <div>
                        <CardText>
                            <strong>
                            {post.user}
                            </strong>
                            <br></br>
                            {post.title}
                            <br></br>
                            {post.body}
                            <br></br>
                            <br></br>
                        </CardText>
                        <hr />
                        {/* <Button>comment</Button>
                        <input></input> */}
                    </div>
                )
                )}
            </div>
        </Jumbotron >
    )
}



export default Feed
