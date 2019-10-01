import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import "./style.css"


function EventCard({ events }) {
  return (
    <div className="eventContainer">
    <Card className="event-card">
      <CardBody>
        <div className="border-bottom" id="pBgColor"></div>
        <div className="text-center"><h5>Events</h5>
        </div>
        {events.map(event => (
          <div className="text-center">
            <br></br>
            <CardText>
              <strong>{event.eventTitle}</strong>
              <br></br>
              {event.eventBody}
              <br></br>
              {event.date}
              <br></br>
              {event.time}
              <br></br>
              <hr />


            </CardText>
          </div>
        )
        )}
      </CardBody>
    </Card>
    </div>
  )
}


export default EventCard
