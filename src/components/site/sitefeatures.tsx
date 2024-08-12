import React from "react";
import feature1 from "../../../public/features/1.png";
import feature2 from "../../../public/features/2.png";
import feature3 from "../../../public/features/3.png";
import Image from "next/image";

const SiteFeatures = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center gap-8 mb-12 text-white"
      id="features"
    >
      <div className="absolute inset-0 -z-10"></div>
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
          <div className="md:w-1/2">
            <Image
              src={feature1}
              alt="Feature 1"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 px-4">
            <h1 className="text-4xl md:text-5xl ">Effortless</h1>
            <p className="text-lg max-w-[80%] text-white/60 mx-auto md:text-xl md:max-w-full md:mt-4">
              Discover Our Streamlined and User-Friendly Onboarding Process,
              Designed to Get You Up and Running Quickly and Efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
          <div className="md:w-1/2 order-2 md:order-1 px-4">
            <h1 className="text-4xl md:text-5xl ">Innovative</h1>
            <p className="text-lg max-w-[80%] text-white/60 mx-auto md:text-xl md:max-w-full md:mt-4">
              Experience Cutting-Edge Features That Revolutionize the Way You
              Work, Making Tasks Simpler and More Efficient.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <Image
              src={feature2}
              alt="Feature 2"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
          <div className="md:w-1/2">
            <Image
              src={feature3}
              alt="Feature 3"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 px-4">
            <h1 className="text-4xl md:text-5xl ">Reliable</h1>
            <p className="text-lg max-w-[80%] text-white/60 mx-auto md:text-xl md:max-w-full md:mt-4">
              Count on Our Reliable Infrastructure to Keep Your Operations
              Running Smoothly, No Matter What Challenges Arise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteFeatures;
