// components/UpcomingClasses.tsx
const UpcomingClasses = () => {
    const classes = [
        { title: 'Cardio Kickboxing', time: '10:00 AM' },
        { title: 'Yoga Fusion', time: '4:30 PM' },
        // Add more classes...
    ];

    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Upcoming Classes
                </h2>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 text-lg md:text-xl">
                    {classes.map((classItem) => (
                        <li
                            key={classItem.title}
                            className="bg-white shadow-md rounded-md p-4 flex flex-col justify-between"
                        >
                            <h3 className="text-xl font-semibold">{classItem.title}</h3>
                            <p className="mt-2 text-gray-600">{classItem.time}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UpcomingClasses;
