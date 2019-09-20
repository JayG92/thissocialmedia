import React from 'react';
import "./style.css"
import { Card, CardBody, CardText } from 'reactstrap';
function EventCard({ posts }) {
  return (
    <Card className="event-card">
      <CardBody>
        <div className="border-bottom" id="pBgColor"></div>
        <div className="text-center"><strong>Events</strong>
        </div>
        <br></br>
        <br></br>
        {posts.map(post => (

          <div className="text-center">

            <CardText>
              <strong>{post.eventTitle}</strong>
              <br></br>
              {post.eventBody}
              <br></br>
              {post.date}
              <br></br>
              {post.time}
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
