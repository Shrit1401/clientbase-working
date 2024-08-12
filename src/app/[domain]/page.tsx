import OwnerSidebar from "@/components/owner/OwnerSidebar";
import React from "react";

const DomainPage = () => {
  return (
    <div className="flex h-screen">
      <div className="lg:w-[20%] w-24 fixed h-full">
        <OwnerSidebar active="home" />
      </div>
      <div className="flex-1 ml-[6rem] lg:ml-[20%]">hello world</div>
    </div>
  );
};

export default DomainPage;
