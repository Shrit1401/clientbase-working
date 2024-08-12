"use client";
import React, { useState } from "react";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

const PricingPlan = ({
  title,
  monthlyPrice,
  yearlyPrice,
  features,
  isPopular,
  isYearly,
  launchDiscount,
}: {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
  isYearly: boolean;
  launchDiscount?: number;
}) => {
  const yearlyMonthlyPrice = Math.floor(yearlyPrice / 12);
  const discountPercentage = Math.round(
    ((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12)) * 100
  );
  const launchDiscountedMonthlyPrice = launchDiscount
    ? Math.round(monthlyPrice * (1 - launchDiscount / 100))
    : monthlyPrice;

  return (
    <div
      className={`p-6 rounded-[25px] border border-gray-700 ${
        isPopular ? "border-primary/50 bg-[#0A0E28]" : ""
      } relative`}
    >
      {isPopular && (
        <span className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full absolute -top-3 right-4">
          Popular
        </span>
      )}
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <div className="mb-6">
        <p className="text-3xl font-bold text-white">
          ${isYearly ? yearlyMonthlyPrice : launchDiscountedMonthlyPrice}
          <span className="text-lg font-normal">/mo</span>
        </p>
        {isYearly && (
          <p className="text-sm text-gray-400">
            <span className="line-through">${monthlyPrice}/mo</span>{" "}
            <span className="text-white text-lg font-bold">
              Save {discountPercentage}%
            </span>
          </p>
        )}
        {launchDiscount && (
          <p className="text-sm text-gray-400">
            <span className="line-through">${monthlyPrice}/mo</span>{" "}
            <span className="text-white text-lg font-bold">
              Launch Discount {launchDiscount}%
            </span>
          </p>
        )}
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <svg
              className="w-4 h-4 mr-2 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button className="bg-[#9854CB] w-full">Get Started</Button>
    </div>
  );
};

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      title: "Basic",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Comprehensive Dashboard",
        "Basic Budgeting Tools",
        "Monthly Financial Reports",
        "Email Support",
      ],
      launchDiscount: 20,
    },
    {
      title: "Premium",
      monthlyPrice: 30,
      yearlyPrice: 300,
      features: [
        "Comprehensive Dashboard",
        "Basic Budgeting Tools",
        "Monthly Financial Reports",
        "Email Support",
        "Financial Analysis",
      ],
      isPopular: true,
      launchDiscount: 25,
    },
    {
      title: "Standard",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Comprehensive Dashboard",
        "Basic Budgeting Tools",
        "Monthly Financial Reports",
        "Email Support",
      ],
      launchDiscount: 15,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pb-8 text-white" id="pricing">
      <div className="flex justify-center items-center space-x-4 mb-8">
        <span
          className={`text-lg ${!isYearly ? "text-white" : "text-gray-400"}`}
        >
          Monthly
        </span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
          className="bg-primary"
        />
        <span
          className={`text-lg ${isYearly ? "text-white" : "text-gray-400"}`}
        >
          Yearly
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingPlan
            key={index}
            title={plan.title}
            monthlyPrice={plan.monthlyPrice}
            yearlyPrice={plan.yearlyPrice}
            features={plan.features}
            isPopular={plan.isPopular}
            isYearly={isYearly}
            launchDiscount={plan.launchDiscount}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
