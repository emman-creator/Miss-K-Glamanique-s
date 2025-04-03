import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="block mb-4">
              <h2 className="text-xl font-display font-medium tracking-tight">Miss K. Glamanique's</h2>
            </Link>
            <p className="text-gray-600 max-w-md mb-6">
              Selling minimal, sustainable tote bags for everyday elegance. 
              Our products are crafted with care and made to last.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/missk._glamaniques_?utm_source=qr&igsh=MTF6cDE5dTliYmNleg=="
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
        
              <a
                href="https://www.tiktok.com/@_missk.glamaniques_?_t=ZM-8uNiloXrolb&_r=1"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 3v12a4 4 0 1 1-4-4"></path>
                  <path d="M16 3a6 6 0 0 0 6 6"></path>
                  <path d="M16 3v10a4 4 0 1 1-4-4"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { text: "Home", path: "/" },
                { text: "About", path: "/about" },
                { text: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>jeanettekaruku13@gmail.com</li>
              <li>+254 716 532 529</li>
              <li>WMMC+374, Dedan Kimathi Ave</li>
              <li>Mombasa, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Miss K. Glamanique's. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-500">
            <Link to="/about#privacy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about#terms" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;