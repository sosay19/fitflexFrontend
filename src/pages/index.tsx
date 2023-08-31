// pages/index.tsx
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/auth/authSlice';
import UpcomingClasses from '@/components/UpcomingClasses';
import Image from 'next/image';
import { smoothScroll } from '@/utils/function';

export default function Home() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <div className="bg-gray-900 text-white overflow-hidden">
        <div className="relative">
          <Image
            width={500}
            height={500}
            src="/assets/gym.jpg" // Replace with your image URL
            alt="Gym Banner"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Welcome to <span className="text-blue-500">FitFlex Gym</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
                Achieve your fitness goals with our world-class facilities and dedicated trainers.
              </p>
              <a
                href="#contact" // Link to the Contact Us section
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll("#contact");
                }}
                className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg md:text-xl lg:text-2xl transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 cursor-pointer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="bg-gray-200 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Have questions or want to learn more about FitFlex Gym? We're here to help!
          </p>
          <p className="text-lg md:text-xl">
            Reach out to us at{' '}
            <a href="mailto:info@fitflexgym.com" className="text-blue-500">
              info@fitflexgym.com
            </a>
          </p>
        </div>
      </div>
      <UpcomingClasses />
      <div className="bg-gray-200 py-8">
        <div className="container mx-auto text-center">
          {isAuthenticated ? (
            <button
              onClick={() => dispatch(logout())}
              className="bg-red-500 text-white py-3 px-8 rounded-full text-lg md:text-xl hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => dispatch(login())}
              className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg md:text-xl hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
}
