import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { toast } from "react-toastify";

type FormData = {
  name: string;
  message: string;
};

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", message: "" });
  const accessKey = import.meta.env.VITE_WEB3FORM_ACCESS_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      toast.error("Both input fields are required", { theme: "dark" });
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", accessKey);
    formDataToSend.append("sent_from_app", "Barber_Saloon");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("message", formData.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Form submitted successfully", { theme: "dark" });
        setFormData({ name: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.", { theme: "dark" });
      }
    } catch (error) {
      console.log(`error: ${error}`);
      toast.error("Network error. Please try again later.", { theme: "dark" });
    }
  };

  return (
    <section className="w-full lg:w-[90%] xl:w-[80%] mx-auto font-quicksand bg-dark-bg px-8 min-[500px]:px-20 min-[600px]:px-30 min-[1500px]:px-60 py-8">
      <h1 className="uppercase text-white text-center text-heading font-semibold pb-6">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="text-white flex gap-4 text-base">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <p>061234567</p>
          </div>
          <div className="text-white flex gap-4 text-base">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <p>
              Somewhere 1st St,
              <br /> Kaunas, Lithuania
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-white text-small w-full md:w-1/2">
          <input
            value={formData.name}
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Name"
            className="bg-light-dark-bg rounded-md outline-none py-1 px-2"
          />
          <textarea
            value={formData.message}
            name="message"
            onChange={handleChange}
            placeholder="Message"
            className="bg-light-dark-bg rounded-md outline-none py-1 px-2 min-h-20 max-h-40"
          />
          <button
            type="submit"
            className="bg-light-dark-bg text-white font-semibold w-fit mx-auto me-0 py-2 px-6 rounded-md cursor-pointer hover:bg-hover-bg hover:text-hover-text transition-colors duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
