import React from 'react';
import "./style.css"
import { Input, FormGroup, Label } from 'reactstrap';


const PostBox = (props) => {
        return (
          <div>
<FormGroup>
    <div className="postContainer">
<Label for="exampleText"></Label>
<Input type="textarea" name="text" id="startPost" placeholder="Start a post" />
</div>
</FormGroup>
</div>
        )
    }


export default PostBox;