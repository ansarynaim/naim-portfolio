import React from 'react';
import { FaHeart } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <p>Made With <FaHeart /> By Naim Ansary.</p> 
      <div className="container mx-auto px-4 text-center">
        Copyright &copy; {new Date().getFullYear()}
      </div>

    </footer>
  );
};

export default Footer;
