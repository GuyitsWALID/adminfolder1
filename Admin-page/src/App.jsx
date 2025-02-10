import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from '../components/sidebar';
import Dashboard from '../src/sidebaroptions/dashboard';
import Vehicles from '../src/sidebaroptions/vehicles';
//import Customers from './sidebaroptions/Customers';
//import Messages from './sidebaroptions/Messages';
import User from '../src/sidebaroptions/userlist';
//import Analytics from './sidebaroptions/Analytics';
//import Settings from './sidebaroptions/Settings';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Router>
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <div
          className={`flex-1 transition-all duration-300 ${
            isCollapsed ? 'ml-16' : 'ml-64'
          }`}
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vehicles" element={<Vehicles />} />
            
            
            <Route path="/user" element={<User />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
