import React from "react";
import EventCard from "./EventCard";

const events = [
  { title: "Diwali Night", date: "2025-11-01", description: "Celebrate Diwali with food, dance, and music!" },
  { title: "Cultural Fest", date: "2025-12-15", description: "Annual cultural extravaganza." }
];

const EventList = () => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default EventList;
