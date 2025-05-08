import { ReactNode, useState } from "react";
import BookingContext, { SelectedBarberSchedule } from "./BookingContext";
import { barberAlexSchedule } from "../data/schedule";

type BookingContextProviderProps = {
  children: ReactNode;
};

const BookingContextProvider = ({ children }: BookingContextProviderProps) => {
  const [selectedBarber, setSelectedBarber] = useState<string>("Alex Carter");
  const [selectedService, setSelectedService] =
    useState<string>("Select Service");
  const [servicePrice, setServicePrice] = useState<string>("0€");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedBarberSchedule, setSelectedBarberSchedule] =
    useState<SelectedBarberSchedule[]>(barberAlexSchedule);
  return (
    <BookingContext.Provider
      value={{
        selectedBarber,
        setSelectedBarber,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        selectedService,
        setSelectedService,
        servicePrice,
        setServicePrice,
        selectedBarberSchedule,
        setSelectedBarberSchedule,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
