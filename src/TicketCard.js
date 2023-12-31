import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket }) => {
  const getUserImage = (userId) => {
    // Replace this with actual logic to get user image
    return `https://placekitten.com/50/50?user=${userId}`;
  };

  return (
    <div className="ticket-card">
      <div className="card-header">
        <div className="user-info">
          <span className="cam-number">{ticket.id}</span>
          <img className="user-image" src={getUserImage(ticket.userId)} alt="User" />
        </div>
        {/* <div className="tag">{ticket.tag}</div> */}
      </div>
      <div className="card-body">
        <div className="title">{ticket.title}</div>
        <button className="feature-request-button">Feature Request</button>
      </div>
    </div>
  );
};

export default TicketCard;
