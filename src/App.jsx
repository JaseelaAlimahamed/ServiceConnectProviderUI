// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProviderRoutes from './routes/ProviderRoutes';
import CardComponent from './components/reUsableComponents/CardComponent';

const dummyAppointments = [
  {
    title: 'Tap Repair',
    viewLink: '#',
    date: 'March 20, 2021',
    time: '09:00 - 10:00 AM',
    serviceProvider: 'Rose',
    status: 'Pending'
  },
  // Add more appointment objects as needed
];

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<ProviderRoutes />} />
      </Routes>

      <div className="p-4">
        <CardComponent
          title="BOOKINGS"
          content=""
          appointments={dummyAppointments}
        />
      </div>
    </div>
  );
}

export default App;
