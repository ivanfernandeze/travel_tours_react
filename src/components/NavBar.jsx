import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-white text-black absolute top-5 left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl z-10 rounded-lg shadow-lg ">
      <nav className="py-2 md:p-4 rounded-3xl">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="hover:text-primary hover:scale-105 transition duration-200 text-2xl font-semibold"><Link to='/'>Travel Tours</Link></div>
          <ul className="flex gap-3">
            <li className="hover:text-primary hover:scale-105 transition duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-primary hover:scale-105 transition duration-200">
              <Link to="/tours">Tours</Link>
            </li>
            <li className="hover:text-primary hover:scale-105 transition duration-200">
              <Link to="/testimonial">Testimonios</Link>
            </li>
            <li className="hover:text-primary hover:scale-105 transition duration-200">
              <Link to="/contactanos">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
