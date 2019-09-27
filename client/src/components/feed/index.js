import React, { useState } from 'react';
import "./style.css"
import { CardText } from 'reactstrap';

// function Feed(props) {
//     const posts = props.posts;
function Feed({ posts }) {
    const [count, setCount] = useState(0);
    // var isProject = true

    return (
        <>

            {posts.map(post => (
                <div className="postBox">
                    <CardText>
                        <div className="feedPadding">
                            
                        {/* <div> { isProject ? <div className="projectTag"><i class="far fa-star"></i> Project</div> : ''}</div> */}
                            <strong>
                                {post.user}@test
                            </strong>
                            <hr className="feedHr"></hr>
                            <div><h3 id="projectIcon" className="projectTag">{post.title}</h3></div>
                            <div>{post.body}</div>
                            <br></br>
                            <br></br>
                            <small className="projectLink"><a target="_blank" href={"https://" + post.projectLink}>{post.projectLink}</a></small>
                            
                            <br></br>
                            <hr className="feedHr"></hr>
                            <div className="Interactions"></div>
                            <small class="text-muted likeCount">{count} Like(s)</small><small class="text-muted commentCount">0 Comment(s)</small>
                            <div className="postInteraction border-top">
                                <div
                                    onClick={() => setCount(1)} className="btn btn-link likes">
                                    <i class="far fa-thumbs-up">
                                    </i> Like(s)
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
