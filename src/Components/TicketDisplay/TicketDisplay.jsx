import React, { useEffect, useState } from 'react';
import './TicketDisplay.css';
import axios from 'axios';

function TicketDisplay() {
  const [availableTickets, setAvailableTickets] = useState(null);

  useEffect(() => {
    const getAvailableTickets = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/getAvailableTickets');
        setAvailableTickets(response.data);
      } catch (error) {
        console.error('Error fetching available tickets:', error);
      }
    };

    const interval = setInterval(getAvailableTickets, 8000);
    getAvailableTickets(); // Initial call

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="available">
      <h3>Current Available Tickets</h3>
      <div className="ticket-count" aria-live="polite">
        {availableTickets !== null ? availableTickets : 'Loading...'}
      </div>
    </div>
  );
}

export default TicketDisplay;