import logo from "../assets/logo.png";
import { links } from "../data/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="bg-light-dark-bg min-h-16 flex flex-col md:flex-row justify-center md:justify-between items-center text-white px-4 relative z-0 md:z-10"
    >
      <img
        src={logo}
        alt="barber logo"
        className="w-16 rounded-full p-1 cursor-pointer absolute left-4 top-0 z-20"
      />
      <span
        onClick={() => setOpen(!open)}
        className="md:hidden text-white text-3xl absolute top-3.5 right-5 cursor-pointer z-20 "
      >
        {open ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </span>

      <ul
        className={`w-full flex flex-col md:flex-row gap-4 md:gap-8 justify-end items-center py-20 md:py-0 md:mr-8 absolute ${
          open ? "top-0" : "top-[-1000px]"
        } md:static bg-light-dark-bg text-heading md:text-base z-10 transition-all duration-300 ease-in-out`}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={`#${link.link}`}
            className="md:hover:border-b-2 md:hover:mb-[-8px] hover:scale-110 transition-all duration-300 border-b-0 border-white "
          >
            {link.name}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
