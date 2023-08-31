import Layout from '../components/Layout';
import MembershipCard from '../components/MembershipCard'; // Create this component for individual membership cards

const membershipData = [
  // Example membership plan data
  {
    title: 'Basic Membership',
    price: '$49/month',
    benefits: ['Access to gym facilities', 'Group fitness classes'],
  },
  {
    title: 'Premium Membership',
    price: '$79/month',
    benefits: ['Full gym access', 'Personal training sessions', 'Group fitness classes'],
  },
  // Add more membership plan data...
];

const MembershipPage = () => {
  return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Membership Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipData.map((membership, index) => (
              <MembershipCard
                key={index}
                title={membership.title}
                price={membership.price}
                benefits={membership.benefits}
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export default MembershipPage;
