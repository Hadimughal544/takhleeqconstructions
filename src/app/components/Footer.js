import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaTiktok, FaFacebook, FaArrowUpLong, FaLocationDot } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="text-white pt-10 bg-[#302560] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 pb-10">
          
          {/* Logo & Tagline */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/assets/Takhleeq-ORG-WHT1.png"
                alt="company logo"
                width={70}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="text-md text-white text-left leading-relaxed">
              At Takhleeq, we don’t just build structures we shape experiences,
              rooted in vision, precision, and trust.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">Our Services</h2>
            <ul className="space-y-1 text-sm">
              <li><Link href="/Architecture" className="hover:underline">Architecture</Link></li>
              <li><Link href="/Constructions" className="hover:underline">Construction</Link></li>
              <li><Link href="/Renovations" className="hover:underline">Renovations</Link></li>
              <li><Link href="/Interior" className="hover:underline">Interior</Link></li>
              <li><Link href="/Landscaping" className="hover:underline">Landscaping</Link></li>
              <li><Link href="/Costestimation" className="hover:underline">Cost Estimation</Link></li>
              <li><Link href="/Projectmanagement" className="hover:underline">Construction Project Management</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Explore</h2>
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
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Contact Us</h2>
            <p className="text-sm text-gray-300">We’re here to help.</p>
            <div className="flex gap-4">
              <div className="flex flex-col gap-5 mt-2">
                <FaLocationDot className="text-orange-400 text-shadow-md" />
                <FaPhone className="text-orange-400 mt-1" />
                <IoMdMail className="text-orange-400" />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Link
                    href="https://share.google/ZkcV9lL3Yy1p0R3cn"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Plaza # 1, 2nd Floor, Sector Q, DHA Phase 7, Lahore
                  </Link>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Link href="tel:+923004096765" className="text-blue-400 hover:underline">
                    +92 300 4096 765
                  </Link>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Link
                    href="mailto:info@takhleeqconstructions.com"
                    className="text-blue-400 hover:underline mt-1"
                  >
                    info@takhleeqconstructions.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="ml-0 md:ml-4 lg:ml-6">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">Follow us</h2>
            <div className="flex md:justify-start gap-4 text-2xl text-orange-400">
              <Link href="#" target="_blank" rel="noopener noreferrer"><FaTiktok /></Link>
              <Link href="https://www.instagram.com/takhleeqconsultant" target="_blank" rel="noopener noreferrer"><SiInstagram /></Link>
              <Link href="https://www.facebook.com/takleeqconsultant/" target="_blank" rel="noopener noreferrer"><FaFacebook /></Link>
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

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute right-8 bottom-30 
             bg-white 
             text-[#302560] text-xl font-bold 
             p-3 rounded-full shadow-lg
             transform transition-all duration-300 
             hover:scale-110 hover:shadow-2xl 
             cursor-pointer
             animate-bounce"
        aria-label="Scroll to top"
      >
        <FaArrowUpLong />
      </button>
    </footer>
  );
}
