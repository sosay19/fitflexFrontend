// pages/member/MemberDashboard.tsx
import React from 'react';
import { useSelector } from 'react-redux';

const dashboard: React.FC = () => {
    const member = useSelector((state) => state.member); // Get member data from Redux store

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Member Dashboard</h1>
            <p className="text-gray-700">Welcome, {member.name}!</p>
            {/* Render other dashboard components here */}
        </div>
    );
};

export default dashboard;
