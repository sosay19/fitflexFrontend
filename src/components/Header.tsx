import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4 md:py-6">
      <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link href="/">
          <div className="text-white text-xl md:text-2xl font-bold mb-2 md:mb-0">
            FitFlex Gym
          </div>
        </Link>
        <ul className="flex space-x-4 md:space-x-6">
          <li>
            <Link href="/classes">
              <div className="text-white hover:text-blue-200">Classes</div>
            </Link>
          </li>
          <li>
            <Link href="/membership">
              <div className="text-white hover:text-blue-200">Membership</div>
            </Link>
          </li>
          <li>
            <Link href="/login" className="text-white">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
