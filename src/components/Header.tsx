import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Star } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-10 py-4 backdrop-blur-md bg-space-900/70 border-b border-space-700/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Star className="w-8 h-8 text-nebula-400 transition-all duration-500 group-hover:animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-nebula-300 rounded-full animate-pulse"></span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-300 to-nebula-500">LSD</span>
              </h1>
              <p className="text-xs text-space-300 tracking-wider">LIFE SAVING DECISIONS</p>
            </div>
          </Link>
          
          <nav className="flex space-x-1">
            <NavLink to="/" active={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/decision" active={location.pathname === "/decision"}>
              New Decision
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg transition-all duration-200 ${
        active
          ? "bg-space-700/60 text-white font-medium"
          : "text-space-300 hover:text-white hover:bg-space-700/40"
      }`}
    >
      {children}
    </Link>
  );
};

export default Header;