import { useContext } from "react";
import BookingContext from "../../context/BookingContext";

type ScheduleSlotProps = {
  time: string;
  reserved: boolean;
  onSelectTime: () => void;
};

const ScheduleSlot = ({ time, reserved, onSelectTime }: ScheduleSlotProps) => {
  const bookingContext = useContext(BookingContext);
  if (!bookingContext) {
    throw new Error(
      "BookingContext must be used within a BookingContextProvider"
    );
  }

  const { selectedTime } = bookingContext;

  return (
    <p
      onClick={!reserved ? onSelectTime : undefined}
      className={`text-center text-base md:text-lg border-[1px] border-light-icons rounded-md p-2 ${
        reserved
          ? "text-light-icons bg-dark-bg cursor-default"
          : "text-white cursor-pointer hover:bg-hover-bg hover:text-hover-text"
      } transition-colors duration-300 ${
        selectedTime === time ? "text-hover-text bg-hover-bg" : ""
      }`}
    >{`${time[0] === "0" ? time.slice(1) : time}`}</p>
  );
};

export default ScheduleSlot;
