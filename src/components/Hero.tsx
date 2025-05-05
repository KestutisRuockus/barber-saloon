import hero from "../assets/hero.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full lg:w-[90%] xl:w-[80%] mx-auto font-quicksand bg-darkest-bg flex flex-col-reverse md:flex-row gap-8 md:gap-0 justify-center items-center relative z-20 px-16 md:px-32 py-12">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-white z-20 md:pl-24"
      >
        <p className="uppercase text-large md:text-extra-large font-bold text-wrap md:max-w-60 leading-10 md:leading-14">
          Distinctive men's grooming
        </p>
        <button className="uppercase bg-light-dark-bg rounded-lg py-2.5 px-8 mt-4 cursor-pointer hover:bg-hover-bg hover:text-hover-text transition-colors duration-300">
          Book appointment
        </button>
      </motion.div>
      <img src={hero} alt="hero" className="z-10" />
    </div>
  );
};

export default Hero;
