import React from "react";
import SectionHeader from "./SectionHeader";
import Shield from "../../../assets/icons/shield2.png";
import Airport from "../../../assets/icons/airportShield.png";
import Baggage from "../../../assets/icons/baggage2.png";
import Car from "../../../assets/icons/car2.png";
import People from "../../../assets/icons/people2.png";
import Book from "../../../assets/icons/openBook.png";

const About = () => {
  const services = [
    {
      icon: Shield,
      title: "Corporate Transportation",
      content:
        "Corporate transportation services for meetings, road shows, executive airport transfers, and employee shuttles.",
    },
    {
      icon: Book,
      title: "Wedding Transportation",
      content:
        "Wedding transportation services including bachelor/ette parties, showers, rehearsal, and receptions",
    },
    {
      icon: People,
      title: "Group & Event Charters",
      content:
        "Transportation for group events and outings, galas, school dances, holiday parties, and conventions.",
    },
    {
      icon: Car,
      title: "Airport Rides",
      content:
        "One way or round trip shared ride or private airport transportation in Chicago and beyond.",
      link: "/",
    },
    {
      icon: Baggage,
      title: "Employee Transportation",
      content:
        "Help protect your employees by avoiding public transportation and offering corporate shuttle services.",
      link: "/",
    },
    {
      icon: Airport,
      title: "Global Transfers",
      content:
        "GroundLink Global can provide transportation worldwide through our network of trusted affiliates.",
      link: "/",
    },
  ];
  return (
    <>
      <section id="services" className="py-20 px-4 md:px-6 bg-white">
        <SectionHeader
          heading={
            <>
              Special Occasion and Event <br/> Limousine Service
            </>
          }
        />
        <section className="w-100 py-20">
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <section className="border border-zinc-300 text-center py-20 px-5 md:px-10">
                <section className="w-100 flex justify-center mb-5">
                  <img
                    className="w-[60px]"
                    src={service.icon}
                    alt={service.icon}
                  />
                </section>
                <h3 className="text-[20px] font-bold mb-5">{service.title}</h3>
                <p className="text-xs font-normal uppercase leading-[19px] mb-5">
                  {service.content}
                </p>
              </section>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
