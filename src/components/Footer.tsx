
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-2">
              AlterEgo
            </div>
            <p className="text-sm text-gray-500">
              Built by real humans, powered by synthetic ones.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a></li>
                <li><a href="#benefits" className="text-gray-600 hover:text-gray-900">Benefits</a></li>
                <li><a href="#demo" className="text-gray-600 hover:text-gray-900">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">LinkedIn</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} AlterEgo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
