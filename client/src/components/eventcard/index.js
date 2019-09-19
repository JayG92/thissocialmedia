import React from 'react';
import "./style.css"
import { Card, CardBody, CardText} from 'reactstrap';

class EventCard extends React.Component {
state={
     eventTitle:"Event Title",
     date:"11/22/2019",
     time:"12:00",
     description:"Come join us for a sweet tech meetup.  You'll meet some great folks and flex with your supreme coding skills"
}


render(){
return(
    <Card className="event-card">
        <CardBody>
        <div className="border-bottom" id="pBgColor"></div>
        <div className="text-center"><strong>Events</strong>
          </div>
            <br></br>
            <br></br>
          <div className="text-center">

          <CardText>
            <strong>{this.state.eventTitle}</strong>
            <br></br>
            {this.state.description}
            <br></br>
            {this.state.date}
            <br></br>
            {this.state.time}
            <br></br>
            <hr/>
            <strong>{this.state.eventTitle}</strong>
            <br></br>
            {this.state.description}
            <br></br>
            {this.state.date}
            <br></br>
            {this.state.time}
            <br></br>
            <hr/>

            <strong>{this.state.eventTitle}</strong>
            <br></br>
            {this.state.description}
            <br></br>
            {this.state.date}
            <br></br>
            {this.state.time}
            <hr/>

        </CardText>
        </div>

        </CardBody>
      </Card>
)
}
}

export default EventCard
