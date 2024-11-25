import React, { useState, useEffect } from 'react';
import Card from '../../components/complaints/ComplaintCard';
import { fetchComplaints } from '../../services/providerAxios';

const ComplaintList = () => {
  const [activeTab, setActiveTab] = useState('active'); // Track active tab
  const [complaints, setComplaints] = useState({ active: [], completed: [] }); // Combined state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Helper to map API response to the desired format
  const transformComplaints = (data) =>
    data.map((complaint) => ({
      id: complaint.id,
      title: complaint.subject,
      name: `User ${complaint.sender}`, // Replace with actual user name if available
      bookingId: complaint.service_request,
      disputeStatus:
        complaint.status === 'in_progress'
          ? 'In Progress'
          : complaint.status === 'pending'
          ? 'Pending'
          : 'Resolved',
      sideColor:
        complaint.status === 'in_progress'
          ? 'bg-yellow-300'
          : complaint.status === 'pending'
          ? 'bg-purple-600'
          : 'bg-green-500',
    }));

  useEffect(() => {
    const fetchData = async () => {
      if (complaints[activeTab].length > 0) return; // Avoid fetching if data already exists

      setLoading(true);
      setError(null);

      try {
        const data = await fetchComplaints(activeTab); // Pass activeTab to determine the URL
        const transformedData = transformComplaints(data);
        setComplaints((prev) => ({
          ...prev,
          [activeTab]: transformedData,
        }));
      } catch (err) {
        setError('Failed to fetch complaints. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  return (
    <div className="w-full h-screen pt-8 p-3 bg-slate-100">
      {/* Tab Selector */}
      <div className="flex justify-center lg:w-full">
        <div className="flex mb-7 bg-medium-gray p-1 w-full justify-evenly rounded-full font-bold overflow-hidden">
          <button
            className={`relative z-10 px-14 sm:px-20 lg:px-32 py-2 rounded-full transition-colors duration-400 
                                ${activeTab === 'active' ? 'bg-white text-black font-semibold' : 'bg-transparent text-white'}`}
            onClick={() => setActiveTab('active')}
          >
            Active
          </button>
          <button
            className={`relative z-10 px-14 sm:px-20 lg:px-32 py-2 rounded-full transition-colors duration-400 
                                ${activeTab === 'completed' ? 'bg-white text-black font-semibold' : 'bg-transparent text-white'}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Loading and Error States */}
      {loading && <p className="text-center">Loading complaints...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Complaints List */}
      <div className="flex gap-5 flex-wrap justify-center pb-5">
        {complaints[activeTab]?.length > 0 ? (
          complaints[activeTab].map((detail) => (
            <Card
              key={detail.id}
              title={detail.title}
              name={detail.name}
              bookingId={detail.bookingId}
              disputeStatus={detail.disputeStatus}
              sideColor={detail.sideColor}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No complaints found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default ComplaintList;
