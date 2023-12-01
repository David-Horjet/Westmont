import React from "react";
import Ride from "../../../assets/images/ride.png";
import Client from "../../../assets/images/client.png";
import Passenger from "../../../assets/images/passenger.png";
import Customer from "../../../assets/images/customer.png";
import Businessman from "../../../assets/images/businessman.png";

const Description = () => {
  return (
    <section className="py-20 flex flex-col md:gap-40 gap-20 bg-white md:px-6 px-4">
      <section className="md:flex items-center gap-10">
        <section className="w-full mb-10 md:mb-0 md:w-1/2">
          <img src={Ride} alt={Ride} />
        </section>
        <section className="w-full md:w-1/2 flex flex-col">
          <p className="mb-10 text-sm font-normal uppercase tracking-wide">
            Experience the ultimate in luxury and convenience with our premier
            Limousine and Car Rental Services in Westmont, IL. Whether you're in
            town for business, a special occasion, or just seeking an upscale
            travel experience, our top-of-the-line fleet is at your service.
            Westmont, known for its charming downtown and scenic parks, deserves
            to be explored in style and comfort. Our fleet, ranging from sleek
            sedans for corporate travel to stretch limousines for weddings,
            proms, or a glamorous night out, is meticulously maintained to
            ensure the highest standard of luxury and safety.
          </p>
          <p className="text-sm font-normal uppercase tracking-wide">
            Our professional chauffeurs are not only skilled in navigation but
            also excel in providing personalized service, ensuring that every
            journey is tailored to your preferences. They are knowledgeable
            about Westmont's best routes, guaranteeing timely arrivals for
            airport transfers, business meetings, or any special events.
          </p>
        </section>
      </section>
      <section className="md:flex md:flex-row-reverse md:flex-row items-center gap-10">
        <section className="w-full mb-10 md:mb-0 md:w-1/2">
          <img src={Client} alt={Client} />
        </section>
        <section className="w-full md:w-1/2 flex flex-col">
          <p className="mb-10 text-sm font-normal uppercase tracking-wide">
            For those special occasions, our stretch limousines add an extra
            touch of elegance. Equipped with state-of-the-art amenities, they
            promise a memorable and luxurious travel experience. Whether it's
            your wedding day, a prom night, or a sophisticated corporate event,
            our limousine service in Westmont is designed to elevate your
            experience
          </p>
          <p className="text-sm font-normal uppercase tracking-wide">
            Our commitment extends beyond just providing a ride. We aim to make
            each journey with us an experience of luxury, comfort, and
            impeccable style. Trust us for your transportation needs in
            Westmont, IL, and enjoy a service that surpasses your expectations.
            Book with us today and travel in the luxury you deserve.
          </p>
        </section>
      </section>
      <section className="md:flex items-center gap-10">
        <section className="w-full mb-10 md:mb-0 md:w-1/2">
          <img src={Passenger} alt={Passenger} />
        </section>
        <section className="w-full md:w-1/2 flex flex-col">
          <p className="mb-10 text-sm font-normal uppercase tracking-wide">
            Experience seamless and stress-free travel with our Airport Transfer
            Services, offering reliable and comfortable transportation to and
            from Chicago's O'Hare and Midway Airports. Our service is designed
            to take the hassle out of airport commutes, providing timely pickups
            and drop-offs, ensuring you never miss a flight or wait too long
            after landing. Our fleet of vehicles caters to a range of
            preferences and needs, featuring modern amenities for a relaxing
            journey. Whether you're traveling for business or leisure, our
            professional chauffeurs are dedicated to delivering a smooth,
            efficient, and luxurious travel experience. Choose our airport
            transfer services for a worry-free journey to your destination.
          </p>
        </section>
      </section>
      <section className="md:flex md:flex-row-reverse md:flex-row items-center gap-10">
        <section className="w-full mb-10 md:mb-0 md:w-1/2">
          <img src={Customer} alt={Customer} />
        </section>
        <section className="w-full md:w-1/2 flex flex-col">
          <p className="mb-10 text-sm font-normal uppercase tracking-wide">
            Experience seamless and stress-free travel with our Airport Transfer
            Services, offering reliable and comfortable transportation to and
            from Chicago's O'Hare and Midway Airports. Our service is designed
            to take the hassle out of airport commutes, providing timely pickups
            and drop-offs, ensuring you never miss a flight or wait too long
            after landing. Our fleet of vehicles caters to a range of
          </p>
          <p className="text-sm font-normal uppercase tracking-wide">
            Preferences and needs, featuring modern amenities for a relaxing
            journey. Whether you're traveling for business or leisure, our
            professional chauffeurs are dedicated to delivering a smooth,
            efficient, and luxurious travel experience. Choose our airport
            transfer services for a worry-free journey to your destination.
          </p>
        </section>
      </section>
      <section className="md:flex items-center gap-10">
        <section className="w-full mb-10 md:mb-0 md:w-1/2">
          <img src={Businessman} alt={Businessman} />
        </section>
        <section className="w-full md:w-1/2 flex flex-col">
          <p className="mb-10 text-sm font-normal uppercase tracking-wide">
          At Westmont Limousine, we pride ourselves on our exceptional service, luxurious vehicles, and professional chauffeurs. We're dedicated to making your experience with us nothing short of perfect. For all your transportation needs, trust Westmont Limousine to deliver sophistication, comfort, and reliability
          </p>
        </section>
      </section>
    </section>
  );
};

export default Description;
