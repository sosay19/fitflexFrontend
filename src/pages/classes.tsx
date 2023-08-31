import Layout from '../components/Layout';
import ClassCard from '../components/ClassCard';

const classesData = [
  // Example class data
  { title: 'Cardio Kickboxing', time: '10:00 AM', description: 'A high-energy cardio workout.' },
  { title: 'Yoga Fusion', time: '4:30 PM', description: 'Mind and body relaxation with yoga.' },
  // Add more class data...
];

const Classes = () => {
  const handleRegister = (classTitle) => {
    // Implement registration logic here
    console.log(`Registered for class: ${classTitle}`);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Upcoming Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classesData.map((classItem, index) => (
            <ClassCard
              key={index}
              title={classItem.title}
              time={classItem.time}
              description={classItem.description}
              onRegister={() => handleRegister(classItem.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
