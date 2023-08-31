const AdminMembershipsManagement = () => {
    const memberships = [
      { id: 1, title: 'Basic Membership', price: '$49/month' },
      { id: 2, title: 'Premium Membership', price: '$79/month' },
      // Add more membership data...
    ];
  
    const handleEditMembership = (membershipId) => {
      // Implement the logic to handle membership editing
      console.log(`Editing membership with ID: ${membershipId}`);
    };
  
    const handleAddMembership = () => {
      // Implement the logic to add a new membership
      console.log("Adding a new membership");
    };
  
    return (
      <div className="bg-white shadow-md rounded-md p-6">
        <h3 className="text-xl font-semibold mb-4">Memberships Management</h3>
        <ul className="space-y-4">
          {memberships.map((membership) => (
            <li key={membership.id}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{membership.title}</p>
                  <p className="text-gray-600">{membership.price}</p>
                </div>
                <button
                  onClick={() => handleEditMembership(membership.id)}
                  className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={handleAddMembership}
          className="bg-green-500 text-white py-2 px-4 rounded-full text-sm hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 mt-4"
        >
          Add Membership
        </button>
      </div>
    );
  };
  
  export default AdminMembershipsManagement;
  