"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import ShakingButton from "./ShakingButton";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide sidebar
        setShowSidebar(false);
      } else {
        // scrolling up → show sidebar
        setShowSidebar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <aside
      className={`fixed top-0   left-0 h-screen bg-[#302560]  flex-col w-32 p-4 hidden md:block lg:block items-center transition-transform duration-500 ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Link href={"/"}>
      <Image
        src={"/assets/Takhleeq-ORG-WHT1.png"}
        alt="main logo"
        height={50}
        width={90}
        className="mb-8"
      />
      </Link>
      <div className="border-b border-white  w-32 my-4"></div>

      <div className="flex flex-col gap-10 items-center  text-white mt-10">
        <Link href={"/Services"} className="hover:text-orange-400 hover:scale-115">
          Services
        </Link>
        <Link href={"/About-us"} className="hover:text-orange-400 hover:scale-115">
          About us
        </Link>
        <Link href={"/Projects"} className="hover:text-orange-400 hover:scale-115">
          Projects
        </Link>
        <Link href={"/Contact-us"} className="hover:text-orange-400 mb-8 hover:scale-115">
          Contact us
        </Link>
      </div>
      <div className="border-b border-dotted border-white w-32 my-4 mb-10"></div>

      <div className=" flex flex-col gap-6 items-center text-white">
      
      <div className="flex gap-4 items-center text-sm">
       <Link href="tel:+923004096765">
          <p className="hover:text-orange-500 hover:scale-115 cursor-pointer">
          0300 4096765
          </p>
       </Link>
       </div>
       <Link href="/ContactForm">
            <ShakingButton/>
        </Link>
      </div>
    </aside>
  );
}
