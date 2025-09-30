import Image from "next/image";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone, FaTiktok } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLocationDot,  } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";


export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="text-white pt-10 bg-[#302560] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-10 ">
          {/* Logo & Tagline */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/assets/Takhleeq-ORG-WHT.png"
                alt="company logo"
                width={70}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="text-md text-white text-left leading-relaxed">
             At Takhleeq, we don’t just build structures we shape experiences, rooted in vision, precision, and trust.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Services</h2>
            <ul className="space-y-1 text-sm">
              <li><Link href="/Contact-us" className="hover:underline">Architecture</Link></li>
              <li><Link href="/Contact-us" className="hover:underline">Construction</Link></li>
              <li><Link href="/Contact-us" className="hover:underline">Renovations</Link></li>
              <li><Link href="/Contact-us" className="hover:underline">Interior</Link></li>
              <li><Link href="/Contact-us" className="hover:underline">Landscaping</Link></li>
              <li><Link href="/Contact-us" className="hover:underline">Cost Estimation</Link></li>
              <li><Link href="/Contact-us" className="hover:underline">Construction Project Management</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Explore</h2>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/Services" className="hover:underline">Services</Link></li>
              <li><Link href="/About-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/Projects" className="hover:underline">Projects</Link></li>
              <li><Link href="/Contact-us" className="hover:underline">Contact us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-sm text-gray-300">We’re here to help.</p>

            
            <div className="flex items-center gap-4 ">
              <FaLocationDot className="text-orange-400 text-shadow-md"  />
              <Link href="https://share.google/ZkcV9lL3Yy1p0R3cn" className="text-blue-400 hover:underline text-sm" >
                Plaza # 1, Sector Q, DHA Phase 7, Lahore 
              </Link>
            </div>

            
            <div className="flex items-center gap-4 text-sm">
              <FaPhone className="text-orange-400" />
              <Link href="tel:+923004096765" className="text-blue-400 hover:underline">
                +92 300 4096 765
              </Link>
            </div>
            <div className="flex items-center gap-8 text-sm">
                <HiOutlineMail className="text-orange-400"  />
                <Link href="mailto:info@takhleeqconstructions.com" className="text-blue-400  hover:underline">
                <p>info@takhleeqconstructions.com</p>
                </Link>
              </div>
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Follow us</h2>
            <div className="flex justify-center md:justify-start gap-4 text-2xl text-orange-400">
              <Link href="#"><FaTiktok /></Link>
              <Link href="#"><SiInstagram /></Link>
              <Link href="#"><FaFacebook /></Link>
              
            </div>
          </div>  
        </div>
        


        {/* Divider */}
        <div className="border-t border-gray-500"></div>

        {/* Bottom Text */}
        <div className="py-6 text-xs md:text-sm text-center text-gray-400 leading-relaxed">
          © 2025 Takhleeq. All rights reserved. 
        </div>
      </div>
       <button
  onClick={scrollToTop}
  className="absolute right-8 bottom-30 
             bg-white 
             hover:from-indigo-600 hover:to-purple-500
             text-[#302560] text-xl font-bold 
             p-3 rounded-full shadow-lg
             transform transition-all duration-300 
             hover:scale-110 hover:shadow-2xl 
             cursor-pointer
             animate-bounce"
  aria-label="Scroll to top"
>
  <FaArrowUpLong  />
</button>
    </footer>
  );
}
