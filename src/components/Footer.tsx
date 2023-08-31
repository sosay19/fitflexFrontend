const Footer = () => {
  return (
    <footer className="bg-blue-500 py-4 md:py-6 mt-12">
      <div className="container mx-auto text-center text-white text-sm md:text-base">
        &copy; {new Date().getFullYear()} FitFlex Gym. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
