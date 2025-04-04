
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            AlterEgo
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 font-medium">How It Works</a>
          <a href="#benefits" className="text-gray-700 hover:text-gray-900 font-medium">Benefits</a>
          <a href="#demo" className="text-gray-700 hover:text-gray-900 font-medium">Demo</a>
          <Button className="bg-alterego-lavender text-primary-foreground hover:bg-purple-200">Join Waitlist</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-gray-900 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 hover:text-gray-900 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#demo" 
              className="text-gray-700 hover:text-gray-900 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Demo
            </a>
            <Button 
              className="bg-alterego-lavender text-primary-foreground hover:bg-purple-200 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
