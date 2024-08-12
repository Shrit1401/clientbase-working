"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../../../public/logo.svg";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

const SiteHeader = () => {
  const user = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <div className="flex z-[3] justify-between px-4 md:px-10 h-[10vh] items-center relative">
      <div className="flex gap-2 items-center">
        <Image src={logo} alt="Logo" className="object-contain h-10 w-10" />
        <span className="text-3xl font-semibold tracking-wide">Clientbase</span>
      </div>
      <nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul
          className={`flex gap-4 ${
            isOpen
              ? "flex-col absolute top-full left-0 w-full bg-background/50 backdrop-blur-lg p-4"
              : "hidden"
          } md:flex md:flex-row md:static md:bg-transparent md:p-0`}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-lg
              hover:opacity-60 transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {user.isLoaded && user.isSignedIn ? (
        <div className="flex gap-4">
          <UserButton />
          <Button>Dashboard</Button>
        </div>
      ) : (
        <Link href="/sign-in">
          <Button className="text-white font-semibold px-4 py-2 rounded-md shadow-md">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
};

export default SiteHeader;
