import { useContext, useEffect, useState } from "react";
import {
  barberAlexSchedule,
  barbersNames,
  schedules,
  services,
} from "../data/schedule";
import Calendar from "./calendar/Calendar";
import BookingContext from "../context/BookingContext";
import ModalContext from "../context/ModalContext";
import { toast } from "react-toastify";

type AppointmenDetailsProps = {
  selectedBarber: string;
  selectedService: string;
  servicePrice: string;
  selectedDate: Date | null;
  selectedTime: string | null;
  getOrdinal: (n: number) => void;
  isConfirmationWindow?: boolean;
};

const AppoitnmentDetails = ({
  selectedBarber,
  selectedService,
  servicePrice,
  selectedDate,
  selectedTime,
  getOrdinal,
  isConfirmationWindow = false,
}: AppointmenDetailsProps) => {
  return (
    <div
      className={`text-white text-base py-6 flex ${
        isConfirmationWindow ? " flex-col" : "flex-row"
      } gap-3 flex-wrap`}
    >
      <p
        className={
          selectedBarber === "Select Barber"
            ? "italic opacity-80 text-red-500"
            : ""
        }
      >
        {selectedBarber}
      </p>
      {!isConfirmationWindow && <span>·</span>}
      <p
        className={
          selectedService === "Select Service"
            ? "italic opacity-80 text-red-500"
            : ""
        }
      >
        {`${selectedService} · ${servicePrice}`}
      </p>
      {!isConfirmationWindow && <span>·</span>}
      <p className={!selectedDate ? "italic opacity-80 text-red-500" : ""}>
        {!selectedDate
          ? "Select Day"
          : `${selectedDate?.toLocaleString("en-US", {
              month: "long",
            })} ${getOrdinal(selectedDate.getDate())}`}
      </p>
      {!isConfirmationWindow && <span>·</span>}
      <p className={!selectedTime ? "italic opacity-80 text-red-500" : ""}>
        {selectedTime
          ? selectedTime[0] === "0"
            ? selectedTime.slice(1)
            : selectedTime
          : "Select Time"}
      </p>
    </div>
  );
};

const Appointment = () => {
  const [isOpenConfirmationWindow, setIsOpenConfirmationWindow] =
    useState(false);

  const toggleConfirmationWindow = () => {
    setIsOpenConfirmationWindow(!isOpenConfirmationWindow);
  };

  const bookingContext = useContext(BookingContext);
  const modalContext = useContext(ModalContext);

  if (!bookingContext) {
    throw new Error(
      "BookingContext must be used within a BookingContextProvider"
    );
  }

  if (!modalContext) {
    throw new Error("ModalContext must be used within a ModalContextProvider");
  }

  const {
    selectedBarber,
    setSelectedBarber,
    selectedService,
    setSelectedService,
    servicePrice,
    setServicePrice,
    selectedTime,
    setSelectedTime,
    selectedDate,
    setSelectedDate,
    setSelectedBarberSchedule,
  } = bookingContext;

  const { setIsModalVisible } = modalContext;

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
    const found = services.find((s) => s.service === e.target.value);
    setServicePrice(found?.price ?? "0€");
  };

  const getOrdinal = (n: number) => {
    if (n >= 11 && n <= 13) {
      return `${n}th`;
    }

    const lastDigit = n % 10;

    switch (lastDigit) {
      case 1:
        return `${n}st`;
      case 2:
        return `${n}nd`;
      case 3:
        return `${n}rd`;
      default:
        return `${n}th`;
    }
  };

  const handleBarberSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    setSelectedBarber(selectedName);

    const updatedSchedule = schedules[selectedName] || barberAlexSchedule;
    setSelectedBarberSchedule(updatedSchedule);

    if (selectedTime) {
      const selectedSlot = updatedSchedule.find(
        (slot) => slot.time === selectedTime
      );

      if (selectedSlot && selectedSlot.reserved) {
        toast.warn(
          `This time ${selectedTime} is already reserved for barber ${selectedName}`
        );
        setSelectedTime(null);
      } else {
        setSelectedTime(selectedSlot ? selectedSlot.time : null);
      }
    }
  };

  const confirmRegistration = () => {
    const day = selectedDate?.getDate();
    const month = selectedDate?.toLocaleString("en-US", {
      month: "long",
    });
    const newAppoitment = {
      barber: selectedBarber,
      service: selectedService,
      date: `${month} ${day}`,
      time: selectedTime,
    };
    console.log("New Appointmen data: ", newAppoitment);
    toast.success("Booking confirmed! We look forward to seeing you.");
    setSelectedService("Select Service");
    setServicePrice("0€");
    const today = new Date();
    setSelectedDate(today);
    setSelectedTime(null);
    setIsModalVisible(false);
    toggleConfirmationWindow();
  };

  const handleBtnBookAppointment = () => {
    const errors: string[] = [];

    if (!selectedBarber || selectedBarber === "Select Barber") {
      errors.push("Please select a barber.");
    }

    if (!selectedService || selectedService === "Select Service") {
      errors.push("Please select a service.");
    }

    if (!selectedDate) {
      errors.push("Please select a date.");
    }

    if (!selectedTime) {
      errors.push("Please select a time.");
    }

    if (errors.length > 0) {
      errors.forEach((err) => toast.warn(err));
      return;
    }

    toggleConfirmationWindow();
  };

  useEffect(() => {
    setSelectedBarberSchedule(schedules[selectedBarber] || barberAlexSchedule);
  }, [selectedBarber, setSelectedBarberSchedule]);

  useEffect(() => {
    const overflowValue = isOpenConfirmationWindow ? "hidden" : "";
    document.body.style.overflow = overflowValue;
  }, [isOpenConfirmationWindow]);

  return (
    <div className="w-full p-8 bg-light-dark-bg font-quicksand rounded-md flex flex-col justify-center items-center relative">
      <h1 className="uppercase text-white text-center text-heading font-semibold py-6">
        Book Appointment
      </h1>
      <div className="w-full bg-light-dark-bg text-white">
        <p>Barber</p>
        <select
          onChange={handleBarberSelection}
          className="w-full border-[1px] border-light-icons rounded-md p-2 mt-2"
        >
          {barbersNames.map((barber) => (
            <option key={barber} value={barber}>
              {barber}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full bg-light-dark-bg text-white mt-6">
        <p>Service</p>
        <select
          onChange={handleServiceChange}
          className="w-full border-[1px] border-light-icons rounded-md p-2 mt-2"
        >
          <option value="Select Service">No Services Selected</option>
          {services.map((service) => (
            <option key={service.service} value={service.service}>
              {`${service.service} ${service.price}`}
            </option>
          ))}
        </select>
      </div>
      <AppoitnmentDetails
        selectedBarber={selectedBarber}
        selectedService={selectedService}
        servicePrice={servicePrice}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        getOrdinal={getOrdinal}
      />

      <Calendar />
      <button
        onClick={handleBtnBookAppointment}
        className="bg-darkest-bg text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-hover-bg hover:text-hover-text transition-colors duration-300"
      >
        Book Appointment
      </button>

      {isOpenConfirmationWindow && (
        <div
          style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          className="fixed inset-0 z-50"
        >
          <div
            className={`${
              isOpenConfirmationWindow ? "block" : "hidden"
            } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:w-1/2 max-w-[400px] bg-darkest-bg p-6 rounded-md`}
          >
            <p className="text-white text-small italic border-b-2 border-light-dark-bg pb-1">
              Double-check the information below, then confirm your booking.
            </p>
            <AppoitnmentDetails
              selectedBarber={selectedBarber}
              selectedService={selectedService}
              servicePrice={servicePrice}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              getOrdinal={getOrdinal}
              isConfirmationWindow={true}
            />
            <div className="flex justify-center gap-4 border-t-2 border-light-dark-bg pt-2">
              <button
                onClick={confirmRegistration}
                className="bg-light-icons text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-hover-bg hover:text-hover-text transition-colors duration-300"
              >
                Confirm
              </button>
              <button
                onClick={toggleConfirmationWindow}
                className="bg-light-dark-bg text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-hover-bg hover:text-hover-text transition-colors duration-300"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
