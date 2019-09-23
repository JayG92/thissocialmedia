import React from 'react';
import "./style.css"
import { Button, CardText, Jumbotron, } from 'reactstrap';

test() {
    console.log("hi")
}


// function Feed(props) {
//     const posts = props.posts;
function Feed({ posts }) {
    return (
        <>
        {/* <div><hr className="sortPost"></hr><text className="sortText">Sort</text></div> */}
                {posts.map(post => (
                    <div className="postBox">
                        <CardText>
                            <div className="feedPadding">
                            <strong>
                            {post.user}@Test
                            </strong>
                            <hr className="feedHr"></hr>
                            <h3>{post.title}</h3>
                            {post.body}
                            <br></br>
                            <br></br>
                            <small class="text-muted likeCount">0 Likes</small><small class="text-muted commentCount">0 Comments</small>
                            <div className="postInteraction border-top">
                                <div onClick={test} className="btn btn-link likes"><i class="far fa-thumbs-up"></i> Like</div>
                                <div className="btn btn-link comments"><i class="far fa-comment"></i> Comments</div>
                            </div>
                            </div>
                        </CardText>
                        {/* <Button>comment</Button>
                        <input></input> */}
                    </div>
                )
                )}

        </>
    )
}



export default Feed
