import { useContext } from "react";
import BookingContext from "../../context/BookingContext";

type DayCardProps = {
  weekDay: string;
  monthDay: number;
  onSelectDay: () => void;
};

const DayCard = ({ weekDay, monthDay, onSelectDay }: DayCardProps) => {
  const bookingContext = useContext(BookingContext);

  if (!bookingContext) {
    throw new Error("DayCard must be used within a BookingContextProvider");
  }

  const { selectedDate } = bookingContext;

  return (
    <div
      onClick={onSelectDay}
      className={`flex flex-col gap-1 ${
        selectedDate?.getDate() === monthDay
          ? "bg-hover-bg"
          : "bg-dark-bg text-white "
      } min-w-8 min-[500px]:min-w-10 sm:min-w-16 text-center   p-1 rounded-md cursor-pointer
     hover:bg-hover-bg hover:text-hover-text transition-colors duration-700`}
    >
      <p className="font-semibold text-small sm:text-base md:text-lg">
        {weekDay}
      </p>
      <p className="text-base sm:text-lg md:text-xl font-bold">{monthDay}</p>
    </div>
  );
};

export default DayCard;
