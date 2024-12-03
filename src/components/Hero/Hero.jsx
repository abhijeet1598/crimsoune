import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <section
        id="banner"
        className="relative bg-[url('/saffron-banner.jpg')] bg-cover bg-center brightness-[60%] h-[30rem] flex flex-col items-center justify-center text-center text-white"
      ></section>
      {/* Additional on banner */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
        <Image
          src="/banner-logo.png"
          alt="crimsoune banner logo"
          width={250}
          height={250}
        />
        {/* <h1 className="text-6xl font-bold mb-4">Crimsoune</h1>
     <p className="text-xl mb-6">
       Nature&apos;s Purest Saffron & Floral Gifts
     </p> */}
        <Link
          href="/contact-us"
          className="px-6 py-3 bg-customYellow text-customViolet rounded-full hover:bg-yellow-600 transition font-semibold"
        >
          Get it now
        </Link>
      </div>
    </>
  );
};

export default Hero;
