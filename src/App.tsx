import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalContextProvider from "./context/ModalContextProvider";
import BookingContextProvider from "./context/BookingProvider";

function App() {
  return (
    <ModalContextProvider>
      <BookingContextProvider>
        <Modal />
        <ToastContainer />
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <ContactUs />
        <Footer />
      </BookingContextProvider>
    </ModalContextProvider>
  );
}

export default App;
