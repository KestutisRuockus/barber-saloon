import logo from "../assets/logo.png";
import { links } from "../data/links";

const Footer = () => {
  return (
    <footer className="w-full lg:w-[90%] xl:w-[80%] mx-auto font-quicksand bg-light-dark-bg pt-6 text-white px-12">
      <div className="flex gap-24 justify-start items-center">
        <img src={logo} alt="logo" className="w-16" />
        <div className="flex flex-col">
          {links.map((link) => (
            <a
              key={`footer-${link.name}`}
              href={`#${link.link}`}
              className="w-fit hover:scale-110 hover:font-bold transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-5 text-center text-gray-500">
        Copyright 2025 C smth. All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
