import { createContext } from "react";

export type SelectedBarberSchedule = {
  time: string;
  reserved: boolean;
};

type BookingContextType = {
  selectedBarber: string;
  setSelectedBarber: React.Dispatch<React.SetStateAction<string>>;
  selectedService: string;
  setSelectedService: React.Dispatch<React.SetStateAction<string>>;
  servicePrice: string;
  setServicePrice: React.Dispatch<React.SetStateAction<string>>;
  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  selectedTime: string | null;
  setSelectedTime: React.Dispatch<React.SetStateAction<string | null>>;
  selectedBarberSchedule: SelectedBarberSchedule[];
  setSelectedBarberSchedule: React.Dispatch<
    React.SetStateAction<SelectedBarberSchedule[]>
  >;
};

const BookingContext = createContext<BookingContextType | null>(null);

export default BookingContext;
