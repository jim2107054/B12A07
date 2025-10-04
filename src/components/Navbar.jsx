import React from "react";

const Navbar = () => {
  const menuItems = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-black">CS — Ticket System</h1>
          </div>
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 font-normal transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-gradient-to-r from-purple-700 to-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center gap-2">
              <span className="text-lg">+</span>
              New Ticket
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
