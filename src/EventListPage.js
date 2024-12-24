import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EventListPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const response = await axios.get('https://event-backend-e5ex.onrender.com/events');
        setEvents(response.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`https://event-backend-e5ex.onrender.com/events/${id}`);
        fetchEvents();
    };

    return (
        <div>
            <Link to="/create" className="btn btn-primary mb-3">Create Event</Link>
            <ul className="list-group">
                {events.map((event) => (
                    <li key={event._id} className="list-group-item">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>{event.event_name}</h5>
                                <p>Location: {event.location}</p>
                                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                                <p>Time: {event.time}</p>
                            </div>
                            <div>
                                <Link to={`/update/${event._id}`} className="btn btn-secondary btn-sm me-2">Edit</Link>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(event._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventListPage;