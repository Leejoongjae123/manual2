"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import setLanguageValue from "@/actions/set-language-action";

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // Function to handle language change
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    setLanguageValue(e.target.value);
  };

  return (
    <nav className="white p-4 border shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className=" font-semibold text-2xl flex items-center">
          <CiGlobe className="mr-2 text-3xl" />
          <span>next-intl</span>
        </Link>

        {/* Navbar Links */}
        <div className="flex items-center space-x-6 text-lg">
          <Link href="/">
            <span
              className="
             cursor-pointer"
            >
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className=" cursor-pointer">About</span>
          </Link>

          {/* Language Dropdown using select */}
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="text-lg   cursor-pointer appearance-none rounded-md border border-gray-500 
               px-10 py-1.5   outline-none sm:py-2 sm:text-base"
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="bn">Bangla</option>
            </select>
            <FiChevronDown
              size={20}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transform text-[#676767]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
