"use client";

import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactUs() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    description: "",
  });

  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/api/send-customer-inquiry-email", {
        customerName: form.customerName,
        customerEmail: form.customerEmail,
        customerPhone: form.customerPhone,
        description: form.description,
      });
      if (!response.data.success) {
        toast.error("Failed to submit inquiry");
        throw new Error(response.data.message);
      }
      toast.success("Inquiry submitted successfully");
      setIsFormSubmitted(true);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
      <Head>
        <title>Contact Us - Crimsoune</title>
        <meta
          name="description"
          content="Get in touch with Crimsoune for inquiries about saffron, saffron seeds, and flowers."
        />
      </Head>

      <main className="bg-[url('/pattern-bg.jpg')] bg-cover bg-center text-customViolet min-h-screen flex items-center justify-center">
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
                  id="customerName"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customPurple"
                  placeholder="Your full name"
                  required
                  value={form.customerName}
                  onChange={handleFormChange}
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
                  id="customerEmail"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customPurple"
                  placeholder="you@example.com"
                  required
                  value={form.customerEmail}
                  onChange={handleFormChange}
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
                  id="customerPhone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customPurple"
                  placeholder="Your phone number"
                  value={form.customerPhone}
                  onChange={handleFormChange}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customPurple"
                  placeholder="Tell us more about your needs"
                  required
                  value={form.description}
                  onChange={handleFormChange}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md font-semibold hover:bg-customPurple hover:text-customViolet transition focus:outline-none focus:ring-2 focus:ring-customPurple"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        )}
        {isFormSubmitted && (
          <section className="max-w-4xl px-6 text-customViolet">
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
