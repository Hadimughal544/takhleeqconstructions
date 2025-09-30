'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdPhoneIphone } from "react-icons/md";
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const textToCopy = '(+92) 300 4096765';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Hide/show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShow(false);
      else setShow(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Disable background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-lg  transition-transform duration-300 z-50 lg:hidden ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Top bar (Logo + Menu button) */}
      <div className="px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/Logo-Takhleeq1.png"
            alt="Company Logo"
            width={60}
            height={15}
            className="object-contain"
          />
        </Link>

        {/* Hamburger menu */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative w-8 h-8 flex items-center justify-center z-50"
        >
          <span
            className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
              mobileMenuOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-black transition-opacity duration-300 ease-in-out ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
              mobileMenuOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 mt-16 space-y-6 text-lg font-semibold">
          <Link
            href="/Services"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-orange-400 hover:scale-115"
          >
            Services
          </Link>
          <Link
            href="/About-us"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-orange-400 hover:scale-115"
          >
            About us
          </Link>
          <Link
            href="/Projects"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-orange-400 hover:scale-115"
          >
            Projects
          </Link>
          <Link
            href="/Contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-orange-400 mb-8 hover:scale-115"
          >
            Contact us
          </Link>

          {/* Contact info */}
          <div className="flex gap-3 items-center pt-4">
            <MdPhoneIphone size={20} className="text-blue-900" />
            <div>
              <a
                href={`tel:${textToCopy}`}
                className="block"
                onClick={() => {
                  handleCopy();
                  setMobileMenuOpen(false);
                }}
              >
                <h2 className="text-orange-500 text-lg">{textToCopy}</h2>
                <p className="text-[#302560] text-md">
                  {copied ? 'Saved & Ready to Dial' : 'Contact our Experts'}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
