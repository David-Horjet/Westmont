import React from "react";
import Navbar from "../../components/shared/navbar/Navbar";
import Hero from "../../components/shared/home/Hero";
import About from "../../components/shared/home/About";
import Description from "../../components/shared/home/Description";
import Advert from "../../components/shared/home/Advert";
import Footer from "../../components/shared/home/Footer";
import Copyright from "../../components/shared/home/Copyright";

const Home = () => {
  return (
    <>
      <section>
        <section className="relative bg-yellow">
          <Navbar />
          <Hero />
        </section>
        <About />
        <Description />
        <Advert />
        <Footer />
        <Copyright />
      </section>
    </>
  );
};

export default Home;
