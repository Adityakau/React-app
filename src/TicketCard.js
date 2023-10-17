// TicketCard.js
import React from 'react';
import './TicketCard.css'; // Import the CSS file for styling

const TicketCard = ({ ticket }) => {
  const { id, title, userId, priority } = ticket;
  const imageUrl = `https://placekitten.com/100/100?image=${id}`; // Use a kitten image placeholder URL

  return (
    <div className={`ticket-card priority-${priority}`}>
      <img className="user-image" src={imageUrl} alt={`User ${userId}`} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{`User: ${userId}`}</p>
      </div>
    </div>
  );
};

export default TicketCard;
