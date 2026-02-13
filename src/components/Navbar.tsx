import { Link } from 'react-router-dom';
import { ClipboardList, Facebook } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <ClipboardList className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">CollegeTasks</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <a
              href="https://www.facebook.com/profile.php?id=61574720111347"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
