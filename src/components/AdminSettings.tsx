const AdminSettings = () => {
    const saveSettings = () => {
      // Implement the logic to save application settings
      console.log("Saving settings");
    };
  
    return (
      <div className="bg-white shadow-md rounded-md p-6">
        <h3 className="text-xl font-semibold mb-4">Application Settings</h3>
        {/* Add settings input fields and controls here */}
        <button
          onClick={saveSettings}
          className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Save Settings
        </button>
      </div>
    );
  };
  
  export default AdminSettings;
  