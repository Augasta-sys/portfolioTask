import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-[#121212] sticky top-5 z-50">
      <nav className="max-w-7xl mx-auto flex justify-center items-center py-8 px-6">
        <ul className="flex gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-general text-sm transition-colors duration-300 ${
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
    </header>
  );
};

export default Navbar;