"use client";

import Head from "next/head";
import { useState } from "react";

export default function ContactUs() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsFormSubmitted(true);
  };
  return (
    <>
      <Head>
        <title>Contact Us - Crimsoune</title>
        <meta
          name="description"
          content="Get in touch with Prakrti for inquiries about saffron, saffron seeds, and flowers."
        />
      </Head>

      <main className="bg-[url('/pattern-bg.jpg')] bg-cover bg-center text-primary min-h-screen flex items-center justify-center">
        {!isFormSubmitted && (
          <section className="sm:bg-white w-full max-w-4xl p-8 rounded-lg shadow-lg sm:flex sm:items-center sm:gap-10">
            <div>
              <h1 className="text-3xl font-semibold text-center mb-6">
                Contact Us
              </h1>
              <p className="text-center mb-8">
                We’d love to hear from you! Fill out the form below, and we’ll
                get back to you as soon as possible.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Your full name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Phone Number Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Your phone number"
                />
              </div>

              {/* Description Input */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium mb-1"
                >
                  Description of Requirement
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Tell us more about your needs"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md font-semibold hover:bg-secondary hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        )}
        {isFormSubmitted && (
          <section className="max-w-4xl px-6 text-primary">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Thank you for submitting your interest at Crimsoune.
            </h2>
            <h2 className="text-3xl font-semibold text-center mb-6">
              Our team will get back to you within next 24-48 hours.
            </h2>
          </section>
        )}
      </main>
    </>
  );
}
