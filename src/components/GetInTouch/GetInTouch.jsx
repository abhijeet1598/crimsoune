import Link from "next/link";
import React from "react";

const GetInTouch = () => {
  return (
    <section className="bg-customPurple text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8">
          Have questions about our saffron, seeds, or flowers? We&apos;re here
          to help! Reach out to us with any inquiries, and let us bring the
          essence of nature to you.
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-customYellow text-customViolet font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default GetInTouch;
