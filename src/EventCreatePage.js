import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EventCreatePage() {
    const [form, setForm] = useState({ event_name: '', location: '', date: '', time: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/events', form);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Event Name"
                    className="form-control"
                    value={form.event_name}
                    onChange={(e) => setForm({ ...form, event_name: e.target.value })}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Location"
                    className="form-control"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="date"
                    className="form-control"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type="time"
                    className="form-control"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">Create Event</button>
        </form>
    );
}

export default EventCreatePage;