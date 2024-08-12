"use client";
import React from "react";
import {
  Home,
  Settings,
  Users,
  CreditCard,
  UserPlus2,
  MessageCircleMore,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const OwnerSidebar = ({
  active,
}: {
  active: "home" | "settings" | "clients" | "invite" | "agency-messages";
}) => {
  const menuItems = [
    {
      id: "home",
      icon: Home,
      label: "Home",
      slug: `/kazikageAgency`,
    },
    {
      id: "clients",
      icon: Users,
      label: "Clients",
      slug: `/kazikageAgency/clients`,
    },
    {
      id: "invite",
      icon: UserPlus2,
      label: "Invite Team",
      slug: `/kazikageAgency/invite`,
    },
  ];

  const teamItems = [
    {
      id: "billing",
      icon: CreditCard,
      label: "Billing",
      slug: `/kazikageAgency/billing`,
    },
    {
      id: "settings",
      icon: Settings,
      label: "Settings",
      slug: `/kazikageAgency/settings`,
    },
  ];

  const MenuItem = ({
    id,
    icon: Icon,
    label,
    slug,
    action,
  }: {
    id: string;
    icon: React.ElementType;
    label: string;
    slug?: string;
    action?: () => void;
  }) => (
    <li>
      <a
        href={slug || "#"}
        onClick={(e) => {
          if (action) {
            e.preventDefault();
            action();
          }
        }}
        className={cn(
          "flex items-center p-3 rounded-lg transition-all duration-200 hover:bg-gray-800",
          active === id ? "bg-purple-600 hover:bg-purple-700" : ""
        )}
      >
        <Icon className="mr-0 md:mr-3" size={22} />
        <span className="font-medium hidden md:inline">{label}</span>
      </a>
    </li>
  );

  return (
    <div className="w-20 md:w-64 h-screen bg-gray-900 text-white p-4 md:p-6 flex flex-col">
      <div className="flex items-center mb-10 justify-center md:justify-start gap-3">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
          <AvatarFallback>KA</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-semibold hidden md:inline">Kazikage</h1>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <h2 className="text-sm uppercase text-gray-500 mb-3 font-semibold tracking-wider hidden md:block">
          Agency Settings
        </h2>
        <ul className="space-y-3">
          {teamItems.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OwnerSidebar;
