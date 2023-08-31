const ClassCard = ({ title, time, description, onRegister }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{time}</p>
            <p className="text-gray-700 mb-4">{description}</p>
            <button
                onClick={onRegister}
                className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm md:text-base hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
                Register
            </button>
        </div>
    );
};

export default ClassCard;
