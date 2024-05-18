import { ImagePlayIcon , ReceiptIndianRupee } from "lucide-react";
import { Wallpaper } from "lucide-react";
import React, { useState } from "react";
import { Github  , LinkedinIcon , TwitterIcon , Laptop2Icon } from "lucide-react";

const SideNav = ({ selectedIndex }) => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: ImagePlayIcon,
    },
    {
      id: 2,
      name: "Background",
      icon: Wallpaper,
    },
  ];

  // state for active sidenav item

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="border shadow-sm h-screen">
      <div>
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            className={`p-3 text-lg px-7 my-2 cursor-pointer text-gray-500 hover:bg-primary hover:text-white transition duration-150 flex items-center gap-2 ${
              activeIndex === index && "bg-primary text-white"
            }`}
            key={index}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="mt-80 flex flex-col justify-between items-center gap-2">
        <p className="text-primary font-bold text-lg">Logoloom &#169; 2024 </p>
        <span className="font-semibold">Developed by adarshlkdev</span>
          <div className="py-2 flex justify-between items-center gap-4">
           <a href="https://github.com/adarshlkdev" target="_blank"><Github  size={25}/></a>
           <a href="https://linkedin.com/in/adarshlkdev" target="_blank"><LinkedinIcon size={25} /></a>
           <a href="https://twitter.com/adarshlkdev" target="_blank"><TwitterIcon size={25}/></a>
           <a href="https://adarshlkdev.vercel.app" target="_blank"><Laptop2Icon size={25}/></a>
          </div>
        </div>
    </div>
  );
};

export default SideNav;
