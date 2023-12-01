import React from "react";

const Features = () => {
  const features = [
    {
      icon: "",
      title: "Int",
      content:
        "Register now to access exclusive content and personalized features",
    },
    {
      icon: "",
      title: "Register",
      content:
        "Register now to access exclusive content and personalized features",
    },
    {
      icon: "",
      title: "Register",
      content:
        "Register now to access exclusive content and personalized features",
    },
  ];
  return (
    <>
      <section className="md:px-6 px-4 py-28">
        <section className="flex">
          <section className="w-1/2">
            <img src="" alt="hero-image" />
          </section>
          <section className="w-1/2 px-2">
            <section className="mb-10">
              <h2 className="text-4xl font-bold mb-10 leading-[70px]">
                Features our users enjoy
              </h2>
            </section>
            <section>
              <ul className="flex flex-col gap-20"></ul>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Features;
