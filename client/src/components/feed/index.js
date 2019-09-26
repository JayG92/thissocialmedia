import React, { useState } from 'react';
import "./style.css"
import { CardText } from 'reactstrap';

// function Feed(props) {
//     const posts = props.posts;
function Feed({ posts }) {
    const [count, setCount] = useState(0);

    return (
        <>

            {posts.map(post => (
                <div className="postBox">
                    <CardText>
                        <div className="feedPadding">
                            <strong>
                                {post.user}@test
                            </strong>
                            <hr className="feedHr"></hr>
                            <h3>{post.title}</h3>
                            {post.body}
                            <br></br>
                            <br></br>

                            <small class="text-muted likeCount">{count} Like(s)</small>
                            <small class="text-muted commentCount">0 Comments</small>
                            <div className="postInteraction border-top">
                                <div
                                    onClick={() => setCount(1)} className="btn btn-link likes">
                                    <i class="far fa-thumbs-up">
                                    </i> Like
                                </div>
                                
                                <div
                                    className="btn btn-link comments">
                                    <i class="far fa-comment">
                                    </i> Comment(s)
                                </div>
                            </div>
                        </div>
                    </CardText>

                </div>
            )
            )}

        </>
    )
}
export default Feed