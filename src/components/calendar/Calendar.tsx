import DayCard from "./DayCard";
import { useState, useEffect, useContext } from "react";
import BookingContext from "../../context/BookingContext";
import ScheduleSlot from "./ScheduleSlot";
import { toast } from "react-toastify";

type Next7DaysProps = {
  date: Date;
  weekDay: string;
  monthDay: number;
};

const Calendar = () => {
  const [next7Days, setNext7Days] = useState<Next7DaysProps[]>([]);
  const [weekIndex, setWeekIndex] = useState<number>(0);

  const bookingContext = useContext(BookingContext);
  if (!bookingContext) {
    throw new Error(
      "BookingContext must be used within a BookingContextProvider"
    );
  }
  const {
    selectedTime,
    setSelectedDate,
    setSelectedTime,
    selectedBarberSchedule,
  } = bookingContext;

  useEffect(() => {
    const getUpcoming7Days = (startOffset: number) => {
      const days = [];
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        const day = new Date(today);
        day.setDate(today.getDate() + startOffset + i);
        days.push({
          date: day,
          weekDay: day.toLocaleString("en-US", { weekday: "short" }),
          monthDay: day.getDate(),
        });
      }

      return days;
    };

    const upcoming7Days: Next7DaysProps[] = getUpcoming7Days(weekIndex);

    setNext7Days(upcoming7Days);
  }, [weekIndex]);

  useEffect(() => {
    const today = new Date();
    setSelectedDate(today);
  }, [setSelectedDate]);

  const handleDaySelection = (day: Next7DaysProps) => {
    setSelectedDate(day.date);

    if (selectedTime) {
      const selectedSlot = selectedBarberSchedule.find(
        (slot) => slot.time === selectedTime
      );

      if (selectedSlot && selectedSlot.reserved) {
        toast.warn(`This time ${selectedTime} is already reserved.`);
        setSelectedTime(null);
      } else {
        setSelectedTime(selectedSlot ? selectedSlot.time : null);
      }
    }
  };

  return (
    <div className="py-6">
      <p className="text-white text-base font-semibold">Date & Time</p>
      <div className="flex gap-1 min-[500px]:gap-4 justify-center pt-2 pb-8 relative">
        {next7Days.map((day: Next7DaysProps) => (
          <DayCard
            key={day.date.toISOString()}
            weekDay={day.weekDay}
            monthDay={day.monthDay}
            onSelectDay={() => handleDaySelection(day)}
          />
        ))}

        <div
          className={`absolute bottom-0 w-full max-w-[250px] min-[500px]:max-w-[370px] sm:max-w-[540px] flex ${
            weekIndex === 0 ? "justify-end" : "justify-between"
          } items-center text-white text-small sm:text-base`}
        >
          {weekIndex !== 0 && (
            <span
              onClick={() => setWeekIndex((prevIndex) => prevIndex - 7)}
              className="cursor-pointer hover:text-hover-text italic"
            >
              Previous 7 Days
            </span>
          )}
          {weekIndex > 0 && (
            <span
              onClick={() => setWeekIndex(0)}
              className="cursor-pointer hover:text-hover-text italic"
            >
              Back to Today's Week
            </span>
          )}
          <span
            onClick={() => setWeekIndex((prevIndex) => prevIndex + 7)}
            className="cursor-pointer hover:text-hover-text italic"
          >
            Next 7 Days
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 py-6 relative">
        {selectedBarberSchedule.map((slot) => (
          <ScheduleSlot
            key={slot.time}
            time={slot.time}
            reserved={slot.reserved}
            onSelectTime={() => setSelectedTime(slot.time)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
