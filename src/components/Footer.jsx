import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      
      <div className="container mx-auto px-4 text-center">
        Copyright &copy; {new Date().getFullYear()}
      </div>

    </footer>
  );
};

export default Footer;
