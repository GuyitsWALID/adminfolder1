import { useState } from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar';
import { Router, Routes } from "react-router"

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex">
      <Router>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      
      {/*<div className={`flex-1 ${isCollapsed ? 'ml-16' : 'ml-64'} transition-all duration-300`}>
        <Navbar />
        <main className="pt-16 p-4">
          <h1 className="text-2xl font-bold">Welcome to the App!</h1>
        </main>
      </div>*/}
    </div>
  );
}

export default App;
