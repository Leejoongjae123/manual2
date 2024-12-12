"use client";

import { useState } from "react";
import setLanguageValue from "@/actions/set-language-action";
import { RxHamburgerMenu } from "react-icons/rx";
import {Select, SelectItem, Image} from "@nextui-org/react";
import Sidebar from "./Sidebar";

const Navbar = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("kr");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to handle language change
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    setLanguageValue(e.target.value);
  };

  return (
    <div>
      <nav className="white p-4 border-b border-gray-200">
        <div className="mx-auto flex justify-between items-center px-5">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mr-2 lg:block"
          >
            <RxHamburgerMenu size={24} />
          </button>

          {/* Navbar Links */}
          <div className="flex items-center space-x-6 text-lg">


            {/* Language Dropdown using select */}
            <div className="relative">
              {/* <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="text-lg   cursor-pointer appearance-none rounded-md border border-gray-500 
               px-10 py-1.5   outline-none sm:py-2 sm:text-base"
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="bn">Bangla</option>
              </select> */}
              <Select className="w-40" onChange={handleLanguageChange} selectedKeys={[selectedLanguage]}>
                <SelectItem startContent={<Image src="/country/korea.png" alt="Korean" width={20} height={20} />} value="kr" key="kr">
                  Korean
                </SelectItem>
                <SelectItem startContent={<Image src="/country/japan.png" alt="Japanese" width={20} height={20} />} value="jp" key="jp">
                  Japanese
                </SelectItem>
                
              </Select>

            </div>
          </div>
        </div>
      </nav>
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/>
        
        
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Navbar;
