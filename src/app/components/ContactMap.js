"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactMap() {
  return (
    <section className="w-full bg-gray-100 py-12">
      
          <div className="w-full h-80 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27220.90525258771!2d74.3074447!3d31.5203702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190fdee8df6c0b%3A0x97da9c4d7b8c5f39!2sLahore!5e0!3m2!1sen!2s!4v1696000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
       
    </section>
  );
}
