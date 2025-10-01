import Image from "next/image";
import React from "react";

export default function Authorize() {
  return (
    <section className="py-10 px-4 bg-white mb-20">
      

      <div className="flex flex-wrap justify-center items-center gap-20">
        <Image
          src="/assets/autlogo/LDA.png"
          alt="LDA logo"
          width={160}
          height={80}
          priority
        />
        <Image
          src="/assets/autlogo/TMA.png"
          alt="TMA logo"
          width={160}
          height={80}
          priority
        />
        <Image
          src="/assets/autlogo/Bahria.png"
          alt="Bahria logo"
          width={160}
          height={80}
          priority
        />
        <Image
          src="/assets/autlogo/DHA.png"
          alt="DHA logo"
          width={140}
          height={70}
          priority
        />
      </div>
    </section>
  );
}
