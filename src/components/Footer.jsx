import React from 'react';
import messanger from '../assets/m.png';
import facebook from '../assets/f.png';
import twitter from '../assets/x.png';
import linkedin from '../assets/in.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Main footer content */}
        <div className="w-full p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* CS - Ticket System Brand*/}
            <div className="lg:col-span-4">
              <h3 className="text-xl font-bold text-white mb-4">
                CS — Ticket System
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            
            {/* Other sections*/}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">About Us</a></li>
                  <li><a href="#mission" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Our Mission</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Contact Sales</a></li>
                </ul>
              </div>
              
              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#products" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Products & Services</a></li>
                  <li><a href="#stories" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Customer Stories</a></li>
                  <li><a href="#apps" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Download Apps</a></li>
                </ul>
              </div>
              
              {/* Information */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Information</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Terms & Conditions</a></li>
                  <li><a href="#join" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">Join Us</a></li>
                </ul>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Social Links</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="w-4 h-4 bg-cyan-400 rounded-full flex items-center justify-center text-black text-xs">
                      <img src={twitter} alt="twitter" />
                    </span>
                    <span>@CS — Ticket System</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="w-4 h-4 bg-cyan-400 rounded-full flex items-center justify-center text-black text-xs">
                      <img src={linkedin} alt="linkedin" />
                    </span>
                    <span>@CS — Ticket System</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="w-4 h-4 bg-cyan-400 rounded-full flex items-center justify-center text-black text-xs">
                      <img src={facebook} alt="facebook" />
                    </span>
                    <span>@CS — Ticket System</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                      <img className='justify-center items-center' src={messanger} alt="messanger" />
                    <span>support@cst.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Horizontal line */}
          <hr className="mt-2 border-gray-700" />
        </div>
      </div>
      {/* Copyright section */}
        <div className="">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} CS — Ticket System. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;