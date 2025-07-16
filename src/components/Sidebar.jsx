import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:w-64 w-16 bg-white shadow-md h-full relative">
      <button className="p-4 md:hidden" onClick={() => setOpen(!open)}>
        <FiMenu size={24} />
      </button>
      <div className={`absolute md:static top-16 md:top-0 left-0 bg-white md:block w-64 ${open ? 'block' : 'hidden'} z-50 shadow-lg md:shadow-none`}>
        <ul className="p-4 space-y-4">
          <li><Link to="/" className="block text-gray-700 hover:text-blue-600">🏠 Home</Link></li>
          <li><Link to="/about" className="block text-gray-700 hover:text-blue-600">ℹ️ About</Link></li>
          <li><Link to="/contact" className="block text-gray-700 hover:text-blue-600">📞 Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;