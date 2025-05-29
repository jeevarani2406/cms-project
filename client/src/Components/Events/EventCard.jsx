import React from "react";

const EventCard = ({ event }) => (
  <div className="event-card">
    <h3>{event.title}</h3>
    <p>{event.date}</p>
    <p>{event.description}</p>
  </div>
);

export default EventCard;
