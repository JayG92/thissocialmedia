import React from 'react';
import "./style.css"
import { Card, CardBody, CardText } from 'reactstrap';


function EventCard({ events }) {
  return (
    <Card className="event-card">
      <CardBody>
        <div className="border-bottom" id="pBgColor"></div>
        <div className="text-center"><strong>Events</strong>
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
  )
}


export default EventCard
