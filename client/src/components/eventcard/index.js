import React from 'react';
import "./style.css"
import { Card, CardHeader,CardTitle, CardText, Button} from 'reactstrap';

class EventCard extends React.Component {



render(){
return(
    <div className="eventcard">
    <Card  body outline color="secondary">
    
    <CardHeader>Events</CardHeader>
    <CardTitle>Event Name</CardTitle>

    <CardText> 
        date
        <br/>
        event description
    </CardText>
  </Card>
</div>

)
}
}

export default EventCard
