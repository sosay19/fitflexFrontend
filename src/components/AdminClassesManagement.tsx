const AdminClassesManagement = () => {
    const classes = [
      { id: 1, title: 'Cardio Kickboxing', time: '10:00 AM' },
      { id: 2, title: 'Yoga Fusion', time: '4:30 PM' },
      // Add more class data...
    ];
  
    const handleEditClass = (classId) => {
      // Implement the logic to handle class editing
      console.log(`Editing class with ID: ${classId}`);
    };
  
    const handleAddClass = () => {
      // Implement the logic to add a new class
      console.log("Adding a new class");
    };
  
    return (
      <div className="bg-white shadow-md rounded-md p-6">
        <h3 className="text-xl font-semibold mb-4">Classes Management</h3>
        <ul className="space-y-4">
          {classes.map((classItem) => (
            <li key={classItem.id}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{classItem.title}</p>
                  <p className="text-gray-600">{classItem.time}</p>
                </div>
                <button
                  onClick={() => handleEditClass(classItem.id)}
                  className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={handleAddClass}
          className="bg-green-500 text-white py-2 px-4 rounded-full text-sm hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 mt-4"
        >
          Add Class
        </button>
      </div>
    );
  };
  
  export default AdminClassesManagement;
  