import React from "react";
import { MovingBorderBox } from "../ui/moving-border";
import { Button } from "../ui/button";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import demo from "../../../public/bgs/demo.png";
import Image from "next/image";
import Link from "next/link";

const LandingComponent = () => {
  return (
    <div className="relative z-[2] flex flex-col items-center justify-center pt-16 h-fit gap-4 text-white text-center">
      <div className="absolute inset-0 -z-10">
        <img
          src="./bgs/hero-bg.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      <MovingBorderBox text="50% Launch Discount" />
      <h1 className="text-5xl font-semibold md:text-6xl lg:text-7xl">
        Manage Your Agency{""} <br className="block md:hidden" />
        Clients Easily
      </h1>
      <p className="text-lg md:text-xl max-w-[80%] text-white/60">
        Organize client information and manage tasks seamlessly. Our client
        portal ensures smooth communication and effective management.
      </p>
      <div className="flex gap-4 justify-center items-center">
        <Link href="#pricing">
          <Button
            size="lg"
            variant={"outline"}
            className="text-white font-semibold px-4 py-2 rounded-md shadow-md md:px-6 md:py-3"
          >
            Pricing <ArrowDownLeft size={24} />
          </Button>
        </Link>
        <Button className="text-white font-semibold px-4 py-2 rounded-md shadow-md md:px-6 md:py-3">
          Get Started <ArrowUpRight size={24} />
        </Button>
      </div>
      <Image
        src={demo}
        alt="Demo"
        className="object-contain w-[80%] h-[60vh] md:w-[80%] md:h-[80vh]"
      />
    </div>
  );
};

export default LandingComponent;
