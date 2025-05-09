import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} SoftSell Inc.</p>
        <p className="small">Designed for Credex Internship Assignment</p>
      </div>
    </footer>
  );
}

export default Footer;
