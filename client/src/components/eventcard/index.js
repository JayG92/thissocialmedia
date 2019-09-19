import React from 'react';
import { Card, CardHeader,CardTitle, CardText} from 'reactstrap';
import "./style.css"

class EventCard extends React.Component {



render(){
return(
    <div className="eventcard">
    <Card  body outline>
    <div className="border-bottom" id="eBgColor"></div>
    <CardHeader>Upcoming Events</CardHeader>
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
