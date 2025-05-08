# ✂️ Fade & Blade Barbers

**Fade & Blade Barbers** — a sleek barbershop appointment system built for a modern grooming experience. This project simulates a booking interface tailored for a men's barbershop, featuring smooth UI interactions, dynamic selections, and a bit of thoughtful validation magic.

## 🚀 Project Purpose

This app was created as a portfolio piece to explore React context, dynamic state handling, and user experience around service selection and booking logic. It simulates how a client could book a barber appointment based on available barbers, services, time, and date — all in a modal component that feels clean and focused.

## 🧩 Features

- ✅ **Modal-based Booking Flow**: Appointments are made inside a modal window with live selections for:

  - Barber
  - Service
  - Date (via custom calendar)
  - Time (based on barber's schedule)

- 🔁 **Calendar**: Users can switch between weeks and return to the current week easily.

- ⚠️ **Smart Validation**: If a time slot becomes unavailable after changing the barber, the app clears the time and warns the user using toast notifications.

- 🔄 **Appointment Confirmation**: Before final booking, users are shown a confirmation window summarizing all their choices and asked to confirm.

- 💬 **Testimonials**: An automated testimonial slider switches every 5 seconds, with manual navigation also available.

- ✉️ **Contact Form**: A simple form with Web3Forms integration for messaging, complete with validation.

## ⚙️ Tech Stack

- **React (TypeScript)**
- **Tailwind CSS**
- **Framer Motion** – animations
- **React Toastify** – notifications
- **Font Awesome** – icons
- **Web3Forms** – simple contact form integration

## 📁 Data & Context

- All static data (barbers, services, schedule) is managed in a `data.ts` file.
- State is managed using:
  - `BookingContext` – for appointment data
  - `ModalContext` – for modal visibility

These contexts enable clean, cross-component data flow without prop drilling.

## 🔮 Future Plans

- Hook into a backend to store barbers, services, and dynamic schedules in a database
- Build an admin dashboard for managing barbers, appointments, and availability

## 🌐 Live Demo

Check out the live version of the project here: [Fade & Blade Booking App](https://fade-and-blade.netlify.app/)

Explore the interface, try booking an appointment, and see how everything works in action.
