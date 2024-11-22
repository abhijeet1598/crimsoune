import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crimsoune - Pure Saffron and Floral Delights</title>
        <meta
          name="description"
          content="Crimsoune - Your source for pure saffron, saffron seeds, and flowers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section
          id="banner"
          className="relative bg-[url('/saffron-banner.jpg')] bg-cover bg-center h-[30rem] flex flex-col items-center justify-center text-center text-white"
        >
          <h1 className="text-6xl font-bold mb-4">Crimsoune</h1>
          <p className="text-xl mb-6">
            Nature&apos;s Purest Saffron & Floral Gifts
          </p>
          <Link
            href="/contact-us"
            className="px-6 py-3 bg-customYellow text-primary rounded-full hover:bg-yellow-600 transition"
          >
            Get it now
          </Link>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">About Crimsoune</h2>
            <p className="text-lg text-primary">
              At Crimsoune, we are dedicated to bringing you the finest saffron
              and the beauty of nature&apos;s blossoms. Grown with care and
              harvested with precision, our saffron and flowers are the epitome
              of purity and natural goodness.
            </p>
          </div>
        </section>

        {/* Product Highlights */}
        <section id="products" className="py-16 px-8 bg-purple-200">
          <h2 className="text-5xl font-semibold mb-12 text-center">
            What We Offer
          </h2>
          <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Saffron Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-56">
                <Image
                  src="/saffron.jpg"
                  alt="Saffron"
                  layout="fill"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Pure Saffron</h3>
                <p className="text-gray-600 mb-4">
                  Our saffron is handpicked to ensure the finest quality,
                  bringing you the pure essence of nature.
                </p>
                <a
                  href="/shop/saffron"
                  className="text-yellow-600 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Saffron Seeds Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-56">
                <Image
                  src="/saffron-seeds.jpg"
                  alt="Saffron seeds"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Saffron Seeds</h3>
                <p className="text-gray-600 mb-4">
                  Grow your own saffron with our carefully selected saffron
                  seeds, perfect for cultivation.
                </p>
                <a
                  href="/shop/seeds"
                  className="text-yellow-600 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Flowers Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-56">
                <Image
                  src="/saffron-flowers.jpg"
                  alt="Saffron flowers"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Natural Flowers</h3>
                <p className="text-gray-600 mb-4">
                  Our flowers bring beauty and freshness, perfect for any
                  occasion or decoration.
                </p>
                <a
                  href="/shop/flowers"
                  className="text-yellow-600 hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Section */}
        <section
          id="benefits"
          className="py-16 px-8 bg-purple-200 text-primary"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-semibold mb-12 text-center">
              Discover the Benefits of Saffron
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
              {/* Pure Saffron */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Pure Saffron: Nature&apos;s Golden Spice
                </h3>
                <ul className="space-y-6">
                  <li>
                    <strong>Premium Quality:</strong> Handpicked for intense
                    flavor and aroma.
                  </li>
                  <li>
                    <strong>Health Benefits:</strong> Supports mental health,
                    boosts mood, and promotes eye and heart health.
                  </li>
                  <li>
                    <strong>Uses:</strong> Perfect for enhancing rice, desserts,
                    and teas with a rich golden hue and aroma.
                  </li>
                </ul>
              </div>

              {/* Saffron Seeds */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Saffron Seeds: Grow Your Own Golden Harvest
                </h3>
                <ul className="space-y-6">
                  <li>
                    <strong>Grow Your Own Saffron:</strong> Cultivate saffron at
                    home with our high-quality seeds.
                  </li>
                  <li>
                    <strong>Benefits of Cultivation:</strong> A rewarding
                    experience and fresh spice from your garden.
                  </li>
                  <li>
                    <strong>Cultivation Tips:</strong> Requires sunlight,
                    well-drained soil, and moderate watering.
                  </li>
                </ul>
              </div>

              {/* Natural Flowers */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Natural Flowers: Enhance Every Space with Beauty
                </h3>
                <ul className="space-y-6">
                  <li>
                    <strong>Beauty & Freshness:</strong> Add natural elegance
                    and fragrance to any room.
                  </li>
                  <li>
                    <strong>Perfect for Any Occasion:</strong> Great for
                    decoration or gifting, bringing positivity to any space.
                  </li>
                  <li>
                    <strong>Caring for Flowers:</strong> Change water, trim
                    stems, and keep in indirect sunlight.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary text-white py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-lg mb-8">
              Have questions about our saffron, seeds, or flowers? We&apos;re
              here to help! Reach out to us with any inquiries, and let us bring
              the essence of nature to you.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-customYellow text-primary font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-light text-primary py-6">
          <div className="max-w-4xl mx-auto text-center">
            <p>&copy; 2024 Crimsoune. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-yellow-600">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-600">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
