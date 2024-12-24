import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventListPage from './EventListPage';
import EventCreatePage from './EventCreatePage';
import EventUpdatePage from './EventUpdatePage';
import ChatbotToggle from './Chatbot';

function App() {
    return (
        <Router>
            <div className="container mt-4">
                <h1 className="text-center">Event Manager</h1>
                <ChatbotToggle/>
                <Routes>
                    <Route path="/" element={<EventListPage />} />
                    <Route path="/create" element={<EventCreatePage />} />
                    <Route path="/update/:id" element={<EventUpdatePage />} />
                </Routes>
            </div>
            
        </Router>
    );
}

export default App;