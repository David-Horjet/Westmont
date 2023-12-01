import React from "react";
import Cars from "../../../assets/images/cars.png";
import { ButtonBg } from "../buttons/Buttons";

const Advert = () => {
  return (
    <>
      <section className="w-full bg-[#0a2c2d] py-20 flex flex-col justify-center">
        <h2 className="text-white text-center mb-5 text-2xl md:text-4xl font-bold">
          Unleash Excellence: Elevate Your Experience Now!
        </h2>
        <section className="flex justify-center">
          <img className="w-[80%] mb-5" src={Cars} alt={Cars} />
        </section>
        <section className="w-[150px] mx-auto flex justify-center">
          <ButtonBg>BOOK NOW</ButtonBg>
        </section>
      </section>
    </>
  );
};

export default Advert;
