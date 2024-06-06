import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white text-black absolute top-5 left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl z-10 rounded-lg shadow-lg">
      <nav className="py-2 md:p-4 rounded-3xl">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="hover:text-primary hover:scale-105 transition duration-200 text-2xl font-semibold">
            <Link to='/'>Travel Tours</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="">
              {isMenuOpen ? (
                <svg className="w-6 h-6 focus:outline-none inline-flex items-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 inline-flex items-center">
                  <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                </svg>
              )}
            </button>
          </div>
          <ul className={`absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-md ${isMenuOpen ? 'block' : 'hidden'} md:flex md:relative md:top-0 md:mt-0 md:shadow-none md:bg-transparent md:rounded-none`}>
            <li className="hover:text-primary hover:scale-105 transition duration-200">
              <Link to="/" onClick={closeMenu} className="block px-4 py-2 hover:bg-white hover:border">Home</Link>
            </li>
            <li className="hover:text-primary hover:scale-105 transition duration-200">
              <Link to="/tours" onClick={closeMenu} className="block px-4 py-2 hover:bg-white hover:border">Tours</Link>
            </li>
            <li className="hover:text-primary hover:scale-105 transition duration-200">
              <Link to="/testimonial" onClick={closeMenu} className="block px-4 py-2 hover:bg-white hover:border">Testimonios</Link>
            </li>
            <li className="hover:text-primary hover:scale-105 transition duration-200">
              <Link to="/contactanos" onClick={closeMenu} className="block px-4 py-2 hover:bg-white hover:border">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}