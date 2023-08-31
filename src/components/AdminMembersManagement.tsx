const handleEditMember = (memberId) => {
    // Implement the logic to handle member editing
    // For example, you can open a modal or navigate to an edit page
    console.log(`Editing member with ID: ${memberId}`);
};
const handleAddMember = () => {
    // Implement the logic to add a new member
    // For example, you can open a modal or navigate to an add member page
    console.log("Adding a new member");
};


const AdminMembersManagement = () => {
    const members = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        // Add more member data...
    ];

    return (
        <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-4">Members Management</h3>
            <ul className="space-y-4">
                {members.map((member) => (
                    <li key={member.id}>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-semibold">{member.name}</p>
                                <p className="text-gray-600">{member.email}</p>
                            </div>
                            <button
                                onClick={() => handleEditMember(member.id)}
                                className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                            >
                                Edit
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <button
                onClick={handleAddMember}
                className="bg-green-500 text-white py-2 px-4 rounded-full text-sm hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 mt-4"
            >
                Add Member
            </button>
        </div>
    );
};

export default AdminMembersManagement;
