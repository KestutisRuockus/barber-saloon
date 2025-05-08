import { motion } from "framer-motion";
import ModalContext from "../context/ModalContext";
import BookingContext from "../context/BookingContext";
import { useContext } from "react";
import { services } from "../data/schedule";

type ServiceTypeProps = {
  serviceType: string;
  price: string;
  icon: string;
  onSelect: (serviceType: string, price: string) => void;
};

const ServiceType = ({
  serviceType,
  price,
  icon,
  onSelect,
}: ServiceTypeProps) => {
  return (
    <div
      onClick={() => onSelect(serviceType, price)}
      className="flex flex-col justify-center items-center bg-light-dark-bg w-fit mx-auto p-2 rounded-lg hover:bg-hover-bg hover:text-hover-text transition-colors duration-300 cursor-pointer"
    >
      <img src={icon} alt={serviceType} className="w-36" />
      <p className="text-center">{serviceType}</p>
    </div>
  );
};

const Services = () => {
  const modalContext = useContext(ModalContext);
  const bookingContext = useContext(BookingContext);

  if (!bookingContext) {
    throw new Error(
      "BookingContext must be used within a BookingContextProvider"
    );
  }

  if (!modalContext) {
    throw new Error(
      "BookingContext must be used within a ModalContextProvider"
    );
  }

  const { setIsModalVisible } = modalContext;
  const { setSelectedService, setServicePrice } = bookingContext;

  const handleServicesTypebtn = (serviceType: string, price: string) => {
    setSelectedService(serviceType);
    setServicePrice(price);
    setIsModalVisible(true);
  };

  return (
    <section
      id="services"
      className="w-full lg:w-[90%] xl:w-[80%] mx-auto font-quicksand bg-dark-bg py-16 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="uppercase text-white text-center text-heading font-semibold pb-6">
          our services
        </h1>
        <div className="text-white grid grid-cols-2 md:grid-cols-4 gap-6 px-8 min-[500px]:px-20 min-[600px]:px-30 min-[1500px]:px-60">
          {services.map((service) => (
            <ServiceType
              key={service.service}
              serviceType={service.service}
              price={service.price}
              icon={service.icon}
              onSelect={handleServicesTypebtn}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
