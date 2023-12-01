import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ButtonBg, ButtonOutline } from "../buttons/Buttons";
import { CustomInput } from "../inputs/CustomInput";
import { CustomTextArea } from "../inputs/CustomTextArea";
import { toast } from "react-toastify";
import { CustomDatePicker } from "../inputs/CustomDatePicker";
import { CustomSelect } from "../inputs/CustomSelect";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => emailjs.init("pEthoSZeQx-J07AJq"), []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passengers: "",
    date: "",
    pets: "",
    contact: "",
    street: "",
    zip: "",
    city: "",
    state: "",
    about: "",
  });

  // console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_msh18zi";
    const templateId = "template_h4xms3x";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, formData);
      toast.success("Your message has been submitted", {
        position: "top-right",
        autoClose: "8000",
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("An error occured while submitting your message", {
        position: "top-right",
        autoClose: "8000",
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="md:px-6 px-4 py-20 md:py-10 bg-hero-bg bg-cover bg-fixed">
        <section className="md:flex items-cener">
          <section className="w-100 md:w-1/2 px-2 md:px-10 text-white flex flex-col justify-center md:text-start text-center">
            <h1 className="font-bold mb-10 md:text-[49px] text-4xl md:leading-[60px] tracking-wide">
              Welcome to Westmont Limousine!
            </h1>
            <p className="text-sm md:text-xl leading-[30px] mb-10 font-medium">
              The Leading Transportation Service in the Western Suburbs, at
              Westmont Limo Service, we take pride in providing a transportation
              experience that seamlessly combines reliability and luxury.
              Whether you're celebrating a special occasion or require
              sophisticated travel, our fleet and dedicated chauffeurs are
              poised to enhance every aspect of your journey.
            </p>
          </section>
          <section className="w-100 md:w-1/2 px-2 md:px-6">
            <form className="bg-white rounded-2xl py-5 md:py-10 px-5">
              <section className="grid grid-cols-1 gap-2 mb-1">
                <CustomInput
                  placeholder={"Number of Passengers"}
                  type={"number"}
                  name={"passengers"}
                  handleChange={handleChange}
                />
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-1">
                <CustomInput
                  placeholder={"First Name"}
                  name={"firstName"}
                  handleChange={handleChange}
                />
                <CustomInput
                  placeholder={"Last Name"}
                  name={"lastName"}
                  handleChange={handleChange}
                />
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-1">
                <CustomInput
                  placeholder={"Email"}
                  name={"email"}
                  handleChange={handleChange}
                />
                <CustomInput
                  placeholder={"Best Contact Number"}
                  name={"contact"}
                  handleChange={handleChange}
                />
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-1">
                <CustomInput
                  placeholder={"Date"}
                  type={"date"}
                  name={"date"}
                  handleChange={handleChange}
                />
                <CustomInput
                  placeholder={"Any Pets"}
                  name={"pets"}
                  handleChange={handleChange}
                />
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                <CustomInput
                  placeholder={"Street Address"}
                  name={"street"}
                  handleChange={handleChange}
                />
                <CustomInput
                  placeholder={"City"}
                  name={"city"}
                  handleChange={handleChange}
                />
                <CustomInput
                  placeholder={"State"}
                  name={"state"}
                  handleChange={handleChange}
                />
                <CustomInput
                  placeholder={"Zip Code"}
                  name={"zip"}
                  handleChange={handleChange}
                />
              </section>
              <CustomTextArea
                placeholder={
                  "Details About Your Event For Faster Quote To and From Location and Type Of Vehicel Needed"
                }
                cols={"10"}
                rows={"7"}
                name={"about"}
                handleChange={handleChange}
              />
              <section className="w-full" onClick={handleSubmit}>
                {loading ? (
                  <ButtonBg
                    disable={
                      formData.firstName.trim() === "" ||
                      formData.lastName.trim() === "" ||
                      formData.email.trim() === "" ||
                      formData.passengers.trim() === "" ||
                      formData.date.trim() === "" ||
                      formData.pets.trim() === "" ||
                      formData.contact.trim() === "" ||
                      formData.street.trim() === "" ||
                      formData.zip.trim() === "" ||
                      formData.city.trim() === "" ||
                      formData.state.trim() === "" ||
                      formData.about.trim() === ""
                    }
                  >
                    Sending....
                  </ButtonBg>
                ) : (
                  <ButtonBg
                    disable={
                      formData.firstName.trim() === "" ||
                      formData.lastName.trim() === "" ||
                      formData.email.trim() === "" ||
                      formData.passengers.trim() === "" ||
                      formData.date.trim() === "" ||
                      formData.pets.trim() === "" ||
                      formData.contact.trim() === "" ||
                      formData.street.trim() === "" ||
                      formData.zip.trim() === "" ||
                      formData.city.trim() === "" ||
                      formData.state.trim() === "" ||
                      formData.about.trim() === ""
                    }
                  >
                    GIVE ME MY FREE QUOTE
                  </ButtonBg>
                )}
              </section>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};

export default Hero;
