import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Home, TrendingUp, Users, Bell, Newspaper, BookOpen } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { to: '/', icon: <LineChart className="w-5 h-5" />, label: 'Stocks' },
    { to: '/dashboard', icon: <Home className="w-5 h-5" />, label: 'Personal Dashboard' },
    { to: '/crowdfunding', icon: <Users className="w-5 h-5" />, label: 'Crowdfunding' },
    { to: '/news', icon: <Newspaper className="w-5 h-5" />, label: 'News' },
    { to: '/learning-hub', icon: <BookOpen className="w-5 h-5" />, label: 'Learning Hub' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-2xl font-bold text-green-600">EcoInvest</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-gray-600 hover:bg-green-100 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Link>
              ))}
              <Link
                to="/alerts"
                className="text-gray-600 hover:bg-green-100 hover:text-green-800 p-2 rounded-full"
              >
                <Bell className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;