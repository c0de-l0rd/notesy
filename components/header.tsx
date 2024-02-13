"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { MdDehaze, MdMenu, MdArrowBack } from "react-icons/md";
import UserImage from "@/public/34.jpg";

function Header() {
  const [searchIcon, setSearchIcon] = useState(false);

  return (
    <div className="bg-white flex flex-row justify-between mb-[7rem] ">
      <div className="bg-white fixed z-1 flex flex-row justify-around ">
        <div className=" flex justify-center items-center pt-2 pb-8">
          <MdMenu className="text-lg ml-3 mr-3" />
          {!searchIcon && (<h1 className="text-lg antialiased font-mono font-bold mr-[10rem]">
            Notesy
          </h1>)}
          {searchIcon && 
          <div className="flex justify-between mr-8 ml-5">
          <MdArrowBack size={16} className="m-auto mr-2" onClick={()=>setSearchIcon(!searchIcon)}/>
          <div className="flex justify-between bg-gray-100 rounded-[25px] pl-1 pr-3 overflow-hidden">
        <input type="search" name="mobileSearch" id="mobileSearch" 
        className="w-[10rem] h-8 pl-2 bg-gray-100 focus:outline-none text-sm font-light m-auto" 
        placeholder="Search for notes...."/>
        <IoSearchOutline className="m-auto ml-3"/>
        </div>
        </div>}
        </div>
        
        <div className=" flex justify-center items-center pt-2 pb-8">
          {!searchIcon && (
            <>
            <IoSearchOutline
            size={20}
              onClick={() => {
                setSearchIcon(!searchIcon);
                console.log(searchIcon);
              }}
              className="text-lg ml-3 mr-3"
              />
                        
              </>
          )}
          <Image
            className="w-8 h-8 rounded-full "
            src={UserImage}
            alt="user's image"
            />
        </div>
      </div>
    </div>
  );
}

export default Header;
