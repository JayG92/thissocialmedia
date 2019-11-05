import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

const CommentBox = ({}) => (
<div>
<div className="Interactions"></div>
<small className="text-muted likeCount"> Like(s)</small><small className="text-muted commentCount">0 Comment(s)</small>
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

);

export default CommentBox;




