"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import setLanguageValue from "@/actions/set-language-action";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to handle language change
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    setLanguageValue(e.target.value);
  };

  return (
    <div>
      <nav className="white p-4 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mr-2 lg:block"
          >
            <RxHamburgerMenu size={24} />
          </button>

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
      <div className="flex">
        {/* 모바일에서만 오버레이 표시 */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        <aside
          className={`
            fixed lg:static top-[73px] bg-white border-r border-gray-200 transition-all duration-300 ease-in-out
            h-[calc(100vh-73px)]
            ${isSidebarOpen ? "w-64" : "w-0"}
            lg:block
            ${isSidebarOpen ? "z-30 lg:z-0" : ""}
            overflow-hidden
          `}
        >
          <div className="p-4 w-64">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="block hover:bg-gray-100 p-2 rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block hover:bg-gray-100 p-2 rounded">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Navbar;
