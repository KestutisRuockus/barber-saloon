import haircut from "../assets/icons/haircut.png";
import beardTrim from "../assets/icons/beardTrim.png";
import shave from "../assets/icons/shave.png";
import haircutBeard from "../assets/icons/haircutBeard.png";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full lg:w-[90%] xl:w-[80%] mx-auto font-quicksand bg-dark-bg py-16"
    >
      <h1 className="uppercase text-white text-center text-heading font-semibold pb-6">
        our services
      </h1>
      <div className="text-white bg-light-dark-bg-bg grid grid-cols-2 md:grid-cols-4 gap-6 px-8 min-[500px]:px-20 min-[600px]:px-30 min-[1500px]:px-60">
        <div className="flex flex-col justify-center items-center bg-light-dark-bg w-fit mx-auto p-2 rounded-lg hover:bg-hover-bg hover:text-hover-text transition-colors duration-300 cursor-pointer">
          <img src={haircut} alt="haircut" className="w-36" />
          <p className="text-center">Haircut</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-light-dark-bg w-fit mx-auto p-2 rounded-lg hover:bg-hover-bg hover:text-hover-text transition-colors duration-300 cursor-pointer">
          <img src={beardTrim} alt="haircut" className="w-36" />
          <p className="text-center">Beard Trim</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-light-dark-bg w-fit mx-auto p-2 rounded-lg hover:bg-hover-bg hover:text-hover-text transition-colors duration-300 cursor-pointer">
          <img src={shave} alt="haircut" className="w-36" />
          <p className="text-center">Shave</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-light-dark-bg w-fit mx-auto p-2 rounded-lg hover:bg-hover-bg hover:text-hover-text transition-colors duration-300 cursor-pointer">
          <img src={haircutBeard} alt="haircut" className="w-36" />
          <p className="text-center">Haircut + BeardTrim</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
