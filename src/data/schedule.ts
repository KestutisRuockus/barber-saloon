import haircut from "../assets/icons/haircut.png";
import beardTrim from "../assets/icons/beardTrim.png";
import shave from "../assets/icons/shave.png";
import haircutBeard from "../assets/icons/haircutBeard.png";

export const barbersNames = ["Alex Carter", "John Doe", "Cole Keaton"];

export const services = [
  { service: "Haircut", price: "20€", icon: haircut },
  { service: "Beard Trim", price: "20€", icon: beardTrim },
  { service: "Shave", price: "10€", icon: shave },
  { service: "Haircut + Beard Trim", price: "35€", icon: haircutBeard },
];

export const barberAlexSchedule = [
  { time: "09.00", reserved: false },
  { time: "09.30", reserved: false },
  { time: "10.00", reserved: false },
  { time: "10.30", reserved: false },
  { time: "11.00", reserved: true },
  { time: "11.30", reserved: false },
  { time: "12.00", reserved: false },
  { time: "12.30", reserved: true },
  { time: "13.00", reserved: false },
  { time: "13.30", reserved: false },
  { time: "14.00", reserved: true },
  { time: "14.30", reserved: true },
  { time: "15.00", reserved: false },
  { time: "15.30", reserved: false },
  { time: "16.00", reserved: false },
  { time: "16.30", reserved: false },
  { time: "17.00", reserved: true },
  { time: "17.30", reserved: false },
  { time: "18.00", reserved: false },
  { time: "19.30", reserved: false },
];

export const barberJohnSchedule = [
  { time: "09.00", reserved: true },
  { time: "09.30", reserved: true },
  { time: "10.00", reserved: true },
  { time: "10.30", reserved: true },
  { time: "11.00", reserved: false },
  { time: "11.30", reserved: true },
  { time: "12.00", reserved: true },
  { time: "12.30", reserved: false },
  { time: "13.00", reserved: true },
  { time: "13.30", reserved: true },
  { time: "14.00", reserved: false },
  { time: "14.30", reserved: false },
  { time: "15.00", reserved: true },
  { time: "15.30", reserved: true },
  { time: "16.00", reserved: true },
  { time: "16.30", reserved: true },
  { time: "17.00", reserved: false },
  { time: "17.30", reserved: true },
  { time: "18.00", reserved: true },
  { time: "19.30", reserved: true },
];

export const barberColeSchedule = [
  { time: "09.00", reserved: true },
  { time: "09.30", reserved: true },
  { time: "10.00", reserved: false },
  { time: "10.30", reserved: true },
  { time: "11.00", reserved: false },
  { time: "11.30", reserved: false },
  { time: "12.00", reserved: false },
  { time: "12.30", reserved: true },
  { time: "13.00", reserved: false },
  { time: "13.30", reserved: false },
  { time: "14.00", reserved: true },
  { time: "14.30", reserved: false },
  { time: "15.00", reserved: true },
  { time: "15.30", reserved: false },
  { time: "16.00", reserved: false },
  { time: "16.30", reserved: true },
  { time: "17.00", reserved: false },
  { time: "17.30", reserved: true },
  { time: "18.00", reserved: true },
  { time: "19.30", reserved: false },
];

export const schedules: {
  [key: string]: { time: string; reserved: boolean }[];
} = {
  "Alex Carter": barberAlexSchedule,
  "John Doe": barberJohnSchedule,
  "Cole Keaton": barberColeSchedule,
};
