import React from 'react';
import { Link } from 'react-router-dom';
import { Home, TrendingUp, Users, Bell, Newspaper, BarChart2, BookOpen, LineChart } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { to: '/', icon: <Home className="w-5 h-5" />, label: 'Dashboard' },
    { to: '/stocks', icon: <LineChart className="w-5 h-5" />, label: 'Stocks' },
    { to: '/recommendations', icon: <TrendingUp className="w-5 h-5" />, label: 'Recommendations' },
    { to: '/crowdfunding', icon: <Users className="w-5 h-5" />, label: 'Crowdfunding' },
    { to: '/alerts', icon: <Bell className="w-5 h-5" />, label: 'Alerts' },
    { to: '/news', icon: <Newspaper className="w-5 h-5" />, label: 'News' },
    { to: '/impact-tracker', icon: <BarChart2 className="w-5 h-5" />, label: 'Impact Tracker' },
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
            <div className="ml-10 flex items-baseline space-x-4">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;