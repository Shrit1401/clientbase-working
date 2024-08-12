import React from "react";
import SiteHeader from "@/components/site/siteheader";
import LandingComponent from "@/components/site/landingcomponent";
import SiteBlock from "@/components/site/siteblock";
import SiteFeatures from "@/components/site/sitefeatures";
import PricingPlans from "@/components/site/sitepricing";
import SiteFooter from "@/components/site/sitefooter";

const LandingHome = () => {
  return (
    <main className="relative text-white min-h-screen overflow-hidden">
      <SiteHeader />
      <LandingComponent />
      <SiteBlock />
      <div className="my-10 p-4 text-center">
        <h1 className="text-[2.8rem] text-center text-white md:text-5xl">
          How Clientbase Works
        </h1>
        <p className="text-lg max-w-[80%] text-white/60 mx-auto md:text-xl md:max-w-[40%] md:mt-2">
          Designed to Simplify Your Experience and Maximize the Benefits of
          CloudPeak's Innovative Features
        </p>
      </div>
      <img
        src="./bgs/feature-bg.png"
        alt="Hero background"
        className="w-full h-full absolute top-0 left-1 z-[-10] object-cover bg-cover bg-center filter brightness-50"
      />
      <SiteFeatures />
      <div className="my-2 p-4 text-center">
        <h1 className="text-[2.8rem] text-center text-white md:text-5xl">
          Pricing Plans
        </h1>
        <p className="text-lg max-w-[80%] text-white/60 mx-auto md:text-xl md:max-w-[40%] md:mt-2">
          Designed to Simplify Your Experience and Maximize the Benefits of
          CloudPeak's Innovative Features{" "}
        </p>
      </div>
      <PricingPlans />

      <SiteFooter />
    </main>
  );
};

export default LandingHome;
