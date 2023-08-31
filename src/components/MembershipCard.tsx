const MembershipCard = ({ title, price, benefits }) => {
    return (
      <div className="bg-white shadow-md rounded-md p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{price}</p>
        <ul className="list-disc pl-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-gray-700">
              {benefit}
            </li>
          ))}
        </ul>
        <button
          onClick={() => alert(`Registered for ${title} membership!`)}
          className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm md:text-base hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 mt-4"
        >
          Register
        </button>
      </div>
    );
  };
  
  export default MembershipCard;
  