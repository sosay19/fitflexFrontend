// pages/secure/SecurePage.tsx
import React from 'react';

const SecurePage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Secure Page</h1>
            <p className="text-gray-700">
                This is a secure page with restricted access. Only authenticated users can view this content.
            </p>
            {/* Add more secure page content */}
        </div>
    );
};

export default SecurePage;
