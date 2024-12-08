import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SiNike, SiJordan } from "react-icons/si";
import { TbBriefcase2 } from "react-icons/tb";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col">
      <div className="text-black py-2 text-sm flex justify-between items-center gap-4 px-8 w-full">
        <div className="text-center flex-1 ">
          <SiJordan className="text-black" />
          Skip to main content
        </div>

        <div className="flex items-center gap-[2px]">
          <div className="text-black text-sm font-normal leading-[21px]">
          <a href="/" className="cursor-pointer">
           Find A Store
            </a>
          </div>
          <RiArrowDropDownLine className="text-black text-3xl" />
        </div>

        <div className="flex items-center gap-[2px]">
          <div className="text-black text-sm font-normal leading-[21px]">
          <a href="/get-help" className="cursor-pointer">
           Help
            </a>
          </div>
          <RiArrowDropDownLine className="text-black text-3xl" />
        </div>

        <div className="flex items-center gap-[2px]">
          <div className="text-black text-sm font-normal leading-[21px]">
          <a href="/join-us" className="cursor-pointer">
           Join Us
            </a>
          </div>
          <RiArrowDropDownLine className="text-black text-3xl" />
        </div>

        <div className="flex items-center gap-[2px]">
          <div className="text-black text-sm font-normal leading-[21px]">
            <a href="/signin" className="cursor-pointer">
            Sign In
            </a>
          </div>
          <RiArrowDropDownLine className="text-black text-3xl" />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center sm:px-20 px-10 py-4">
        <h1 className="text-5xl font-bold text-black">
          <a href="/">

          <SiNike />
          </a>
        </h1>

        <nav className="md:flex space-x-8 items-center max-w-min">
          <a
            href="/products"
            className="text-black hover:text-slate-600 hover:underline font-semibold"
          >
            New & Featured
          </a>
       
          <a
            href="/men"
            className="text-black hover:text-slate-600 hover:underline font-semibold"
          >
            Men
          </a>
          <a
            href="/women"
            className="text-black hover:text-slate-600 hover:underline font-semibold"
          >
            Women
          </a>
          <a
            href="/kids"
            className="text-black hover:text-slate-600 hover:underline font-semibold"
          >
            Kids
          </a>
          <a
            href="/sale"
            className="text-black hover:text-slate-600 hover:underline font-semibold"
          >
            Sale
          </a>
          <a
            href="/products"
            className="text-black hover:text-slate-600 hover:underline font-semibold"
          >
            SNKRS
          </a>
        </nav>

        {/* Search Icon */}

        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2">
            <CiSearch className="text-black font-semibold text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="bg-slate-100 outline-none text-sm"
            />
          </div>
          <CiHeart className="text-black text-2xl" />
          <TbBriefcase2 className="text-black text-2xl" />
        </div>
      </div>
    </header>
  );
}
