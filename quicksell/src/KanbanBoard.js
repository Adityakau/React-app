// KanbanBoard.js
import React from 'react';
import TicketCard from './TicketCard';
import './KanbanBoard.css';

const KanbanBoard = ({ tickets, groupingOption, sortOption }) => {
  const groupTickets = () => {
    // Group tickets based on the selected option
    let groupedTickets = {};

    tickets.forEach((ticket) => {
      const groupKey =
        groupingOption === 'status'
          ? ticket.status
          : groupingOption === 'user'
          ? ticket.userId
          : groupingOption === 'priority'
          ? `priority-${ticket.priority}`
          : '';

      if (!groupedTickets[groupKey]) {
        groupedTickets[groupKey] = [];
      }

      groupedTickets[groupKey].push(ticket);
    });

    // Sort tickets within each group based on the selected sorting option
    for (const key in groupedTickets) {
      groupedTickets[key] = groupedTickets[key].sort((a, b) => {
        if (sortOption === 'priority') {
          return b.priority - a.priority;
        } else if (sortOption === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    }

    return groupedTickets;
  };

  const renderColumns = () => {
    const groupedTickets = groupTickets();

    return Object.keys(groupedTickets).map((groupKey) => (
      <div key={groupKey} className={`kanban-column ${groupingOption === 'status' ? 'full-width' : ''}`}>
        <h2>{groupKey}</h2>
        {groupedTickets[groupKey].map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    ));
  };

  return <div className="kanban-board">{renderColumns()}</div>;
};

export default KanbanBoard;
