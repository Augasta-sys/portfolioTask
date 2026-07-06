import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[#121212]"
    >
      {/* Desktop Navbar */}
      <nav
        className="hidden md:flex justify-center items-center"
        style={{
          padding: "30px 0",
        }}
      >
        <ul
          className="flex items-center"
          style={{
            gap: "48px",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-general transition-colors duration-300 ${
                    isActive
                      ? "text-[#D9FF2F]"
                      : "text-white hover:text-[#D9FF2F]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className="flex md:hidden justify-between items-center"
        style={{
          padding: "20px 24px",
        }}
      >
        <h1 className="font-humane text-[#D9FF2F] text-5xl">
          Rahul
        </h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#D9FF2F] text-3xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-[#1B2129]"
          style={{
            padding: "20px 0",
          }}
        >
          <ul
            className="flex flex-col items-center"
            style={{
              gap: "20px",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-general text-lg ${
                      isActive
                        ? "text-[#D9FF2F]"
                        : "text-white hover:text-[#D9FF2F]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar; 