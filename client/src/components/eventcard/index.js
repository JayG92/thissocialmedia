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
        <br></br>
        {events.map(event => (
          <div className="text-center shadow-sm">
            <CardText className="eventBox">
              <strong className="eventTitle">{event.eventTitle}</strong>
              <br></br>
              <div className="eventBody">{event.eventBody}</div>
              <br></br>
              <div className="eventTime">Time: {event.time}</div>
              <br></br>
              <div className="eventDate">Date: {event.date}</div>


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
