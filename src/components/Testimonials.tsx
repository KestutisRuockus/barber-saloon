import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import { testimonials } from "../data/testimonials";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [
      (prevPage + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    const changeItem = (page: number) => {
      if (page === testimonials.length - 1) {
        setPage([0, direction]);
      } else {
        setPage(([prevPage]) => [prevPage + 1, direction]);
      }
    };

    const interval = setInterval(() => {
      changeItem(page);
    }, 5000);

    return () => clearInterval(interval);
  }, [direction, page]);

  return (
    <section className="w-full lg:w-[90%] xl:w-[80%] mx-auto font-quicksand bg-dark-bg px-8 min-[500px]:px-20 min-[600px]:px-30 min-[1500px]:px-60 flex flex-col items-center overflow-hidden">
      <h1 className="uppercase text-white text-center text-heading font-semibold pb-6">
        Testimonials
      </h1>
      <div>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="bg-light-dark-bg text-white rounded-lg py-8 px-16 max-w-xl relative"
          >
            <span className="absolute top-4 left-4 text-4xl">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            <p>{testimonials[page].text}</p>
            <p className="font-semibold mt-1">{testimonials[page].author}</p>
            <span className="absolute bottom-4 right-4 text-4xl">
              <FontAwesomeIcon icon={faQuoteRight} />
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="text-white flex gap-4 justify-center items-center py-6">
        <span
          className="hover:text-darkest-bg transition-colors duration-300 cursor-pointer"
          onClick={() => paginate(-1)}
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </span>
        {testimonials.map((element, index) => (
          <div
            key={`${element.author + index}`}
            onClick={() => setPage([index, direction])}
            className={`w-3 h-3 ${
              index === page ? "bg-black" : "bg-white"
            } rounded-full hover:bg-darkest-bg transition-colors duration-300 cursor-pointer border-2 border-white`}
          ></div>
        ))}
        <span
          className="hover:text-darkest-bg transition-colors duration-300 cursor-pointer"
          onClick={() => paginate(1)}
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </span>
      </div>
    </section>
  );
};

export default Testimonials;
