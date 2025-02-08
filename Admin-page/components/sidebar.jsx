import React from 'react';
import MekinaHubLogo from '../src/assets/MEKINAHUB-removebg-preview (1).svg';
import { Routes } from "react-router"
import {
  Home,
  Car,
  Users,
  MessageSquare,
  Settings,
  PieChart,
  FileText,
  LogOut,
  Menu
} from 'lucide-react';


const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', link: '/dashboard' },
    { icon: Car, label: 'Vehicles', link: '#' },
    { icon: Users, label: 'Customers', link: '#' },
    { icon: MessageSquare, label: 'Messages', link: '#' },
    { icon: FileText, label: 'User', link: '#' },
    { icon: PieChart, label: 'Analytics', link: '#' },
    { icon: Settings, label: 'Settings', link: '#' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 flex flex-col ${
        isCollapsed ? 'w-16' : 'w-64'
      } min-h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-20`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <img src={MekinaHubLogo} alt="logo" className="w-40" />
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-lg hover:bg-gray-100"
        >
          <Menu className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                <item.icon className="w-5 h-5" />
                {!isCollapsed && <span className="ml-3">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200">
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
