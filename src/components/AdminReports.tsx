const AdminReports = () => {
    const generateReports = () => {
        // Implement the logic to generate reports
        console.log("Generating reports");
    };

    return (
        <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-4">Reports</h3>
            <button
                onClick={generateReports}
                className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
                Generate Reports
            </button>
        </div>
    );
};

export default AdminReports;
