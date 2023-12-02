import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    {
      text: "How we work",
      link: "/",
    },
    {
      text: "Faq",
      link: "/",
    },
    {
      text: "Services",
      link: "/",
    },
    {
      text: "Contact",
      link: "/",
    },
  ];
  const services = [
    {
      text: "Corporate Transportation",
      link: "#services",
    },
    {
      text: "Wedding Transportation",
      link: "#services",
    },
    {
      text: "Group & Event Charters",
      link: "#services",
    },
    {
      text: "Employee Transportation",
      link: "#services",
    },
    {
      text: "Global Transfers",
      link: "#services",
    },
    {
      text: "Airport RIDES",
      link: "#services",
    },
  ];
  return (
    <>
      <section className="py-20 bg-neutral-900 w-full flex md:px-6 px-2">
        <section className="w-full flex md:flex-row flex-col gap-20">
          <section className="w-full md:w-2/4 flex flex-col">
            <h5 className="mb-5 text-white md:text-start text-center text-[22px] font-normal leading-loose">
              Westmont.
            </h5>
            <p className="text-neutral-400 md:text-start text-center  text-base font-normal mb-5">
            Westmont Limousine, where luxury meets unparalleled service. Our commitment is to provide you with a journey that goes beyond transportation—creating memories in every mile. Discover elegance, punctuality, and personalized service with Westmont.
            </p>
            <span className="w-full mb-5 text-stone-400 md:text-start text-center text-sm font-normal uppercase leading-normal tracking-[3.50px]">
              Call Center:{" "}
              <a href="tel:+3312892088">+331 289 20 88</a>
            </span>
            <span className="w-full text-stone-400 md:text-start text-center text-sm font-normal uppercase leading-normal tracking-[3.50px]">
              Our location:{" "}
              <a href="https://maps.app.goo.gl/NswxXNVsLLzeo4hS7">6301 S Cass Ave Westmont, IL 60559</a>
            </span>
          </section>
          <section className="w-full md:w-1/4">
            <h5 className="mb-5 text-white md:text-start text-center text-[22px] font-normal leading-loose">
              Quick links
            </h5>
            <ul className="flex flex-col gap-5">
              {quickLinks.map((quickLink) => (
                <li className="md:text-start text-center">
                  <a
                    className="text-white text-[12px] font-normal uppercase leading-normal tracking-[3.50px]"
                    href={quickLink.link}
                  >
                    {quickLink.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section className="w-full md:w-1/4">
            <h5 className="mb-5 text-white md:text-start text-center text-[22px] font-normal leading-loose">
              Our Services
            </h5>
            <ul className="flex flex-col gap-5">
              {services.map((service) => (
                <li className="md:text-start text-center">
                  <a
                    className="text-white text-[12px] font-normal uppercase leading-normal tracking-[3.50px]"
                    href={service.link}
                  >
                    {service.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
};

export default Footer;
