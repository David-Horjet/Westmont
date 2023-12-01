import React from "react";

const SectionHeader = ({ heading }) => {
  return (
    <>
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black">{heading}</h2>
      </section>
    </>
  );
};

export default SectionHeader;
