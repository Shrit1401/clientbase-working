import { FolderKanban, Pyramid } from "lucide-react";
import React from "react";

const SiteBlock = () => {
  return (
    <div className="flex flex-col mt-10 md:flex-row justify-between h-fit md:h-[40vh] items-center px-4 md:px-16">
      <div className="max-w-[300px] text-white">
        <h1 className="text-4xl font-bold text-white">
          Helping Owners
          <br /> Helping Clients.
        </h1>
        <p className="mt-5 text-gray-400">
          Our mission is to empower individuals and organizations to unleash
          their creative potential and make a positive impact on the world.
        </p>
      </div>
      <div className="flex gap-4 md:gap-8 mt-8 md:mt-0">
        <div className="max-w-[400px] text-white bg-[#261051] p-5 rounded-md flex flex-col gap-3 items-center mt-8 md:mt-0">
          <div className="bg-[#101636] p-3 rounded-full w-[50px] h-[50px] flex items-center justify-center">
            <Pyramid size={32} color="#9854CB" />
          </div>
          <h1 className="text-3xl text-white">Agency</h1>
          <p className="text-center text-gray-200">
            Effortlessly Collaborate Across Teams and Projects with CloudPeak's
            Seamless and Intuitive Collaboration Tools
          </p>
        </div>
        <div className="max-w-[400px] text-white bg-[#261051] p-5 rounded-md flex flex-col gap-3 items-center mt-8 md:mt-0">
          <div className="bg-[#101636] p-3 rounded-full w-[50px] h-[50px] flex items-center justify-center">
            <FolderKanban size={32} color="#9854CB" />
          </div>
          <h1 className="text-3xl text-white">Owner</h1>
          <p className="text-center text-gray-200">
            Effortlessly Collaborate Across Teams and Projects with CloudPeak's
            Seamless and Intuitive Collaboration Tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteBlock;
