import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { ButtonBg } from "../buttons/Buttons";

const Navbar = () => {
  return (
    <>
      <header className="bg-white border-b border-white bg-zinc-100 border-opacity-50 md:px-6 px-2">
        <section className="flex items-center justify-between py-1">
          <section>
            <Logo />
          </section>
          <section>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  href="tel:+3314441878"
                  className="text-base font-medium text-gray-800 hidden md:block"
                >
                  (331) 289-2088
                </a>
              </li>
              <li>
                <a
                  href={"https://customer.moovs.app/ridecar/new/info"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonBg>BOOK NOW</ButtonBg>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </header>
    </>
  );
};

export default Navbar;
