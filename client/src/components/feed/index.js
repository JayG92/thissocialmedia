import React, { useState } from 'react';
import "./style.css"
import { CardText } from 'reactstrap';
import { withContext } from '../../context';

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
                            
                            <strong>
                                {post.user}@test
                            </strong>
                            <div> { post.title.length >= 1 ? <div className="projectTag"><i className="far fa-star"></i> Project</div> : ""} </div>
                            <hr className="feedHr"></hr>
                            <h3>{post.title}</h3>
                            <div className="postBody">{post.body}</div>
                        
                            <div> { post.projectLink.length >= 1 ? <div><br></br><br></br><small className="projectLink">Project Link: <a target="_blank" href={"https://" + post.projectLink}>{post.projectLink}</a></small></div> : ""} </div>
                            {/* <hr className="feedHr"></hr> */}
                            <br></br>
                            <div className="Interactions"></div>
                            <small className="text-muted likeCount">{count} Like(s)</small><small className="text-muted commentCount">0 Comment(s)</small>
                            <div className="postInteraction border-top">
                                <div
                                    onClick={() => setCount(1)} className="btn btn-link likes">
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
            )
            )}

        </>
    )
}
export default withContext(Feed)